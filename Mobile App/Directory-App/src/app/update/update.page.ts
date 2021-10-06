import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateService } from '../services/update.service';
import { Subscription } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit, OnDestroy {

  error = {
    hasError: false,
    errorMessage: 'Error in updating'
  }
  displayMsg = '';
  updateDescription = '';
  size:string;
  showContinueBtn = false;
  public hasInternet: boolean = false;
  public updateConfermation: boolean = false;
  public resetLocalVariables = []

  updateDownloadingProgressSubscription: Subscription;

  constructor(public router: Router, private updateService: UpdateService, private platform: Platform) {
    

    this.hasInternet = navigator.onLine;
    

  }

  async ngOnInit() {
    this.platform.ready().then(async () => {
      this.updateDownloadingProgressSubscription = this.updateService.updateDownloadingProgress.subscribe(progress => {
        this.displayMsg = progress;
      })
      if (this.hasInternet) {
        this.displayMsg = 'Cheking for Updates';
        const updateConfig = await this.updateService.checkForUpdate();
        this.updateDescription = updateConfig.updateDescription;
        this.size = updateConfig.size;
        if(!updateConfig.error){
          // remove local storage
          this.resetLocalVariables = updateConfig.resetLocalData;          
          if (updateConfig.hasUpdates && updateConfig.mustUpdate) { 
            this.updateConfermation = false
            await this.updateNow();
          }else if(updateConfig.hasUpdates){
            this.displayMsg = '';
            this.updateConfermation = true;
          }else {
            //No updates available.
            sessionStorage.setItem('isAppOppend', String(true));
            this.router.navigate(['slider']);
          }
        }else{
          this.error.hasError = true;
          this.error.errorMessage = updateConfig.error;
          this.showContinueBtn = !updateConfig.mustUpdate;
        }       

      } else if (localStorage.getItem('appUpdateVersion')) {
        sessionStorage.setItem('isAppOppend', String(true));
        this.router.navigate(['slider']);
      } else {
        this.error.hasError = true;
        this.error.errorMessage = "A2 Directory need to download initial data<br>Please connect your device to the internet!";
        this.showContinueBtn = false;
      }
    });


  }

  ngOnDestroy() {
    this.updateDownloadingProgressSubscription.unsubscribe();
  }

  async retryForUpdate() {
    this.error.hasError = false;
    this.error.errorMessage = '';
    this.showContinueBtn = false;
    const updateConfig = await this.updateService.checkForUpdate(); 
    if(!updateConfig.error){
      this.updateDescription = updateConfig.updateDescription;
      this.size = updateConfig.size;
      const updates = await this.updateService.downloadUpdate();
      if (updates.downloadState) {
        //Update completed.
        this.router.navigate(['slider']);
      } else {
        this.error.hasError = true;
        this.error.errorMessage = updates.message;
        this.showContinueBtn = !updateConfig.mustUpdate;
      }
    }else{
      this.error.hasError = true;
      this.error.errorMessage = updateConfig.error;
      this.showContinueBtn = !updateConfig.mustUpdate;
    }    
    

  }

  continue() {
    this,this.updateConfermation = false;
    sessionStorage.setItem('isAppOppend', String(true));
    this.router.navigate(['slider']);
  }

  async updateNow(){
    await this.cleanLocalVariable(this.resetLocalVariables);
    this.updateConfermation = false;
    const updates = await this.updateService.downloadUpdate();
    if (updates.downloadState) {
      //Update completed.
      sessionStorage.setItem('isAppOppend', String(true));
      this.router.navigate(['slider']);
    } else {
      this.error.hasError = true;
      this.error.errorMessage = updates.message;
      this.showContinueBtn = true;
    }
  }

  async cleanLocalVariable(keyList){
    console.log("Local Storage Array: ", keyList);
    if(keyList.includes("all")){
      localStorage.clear();
      console.log("Clear all data")
      return;
    }
    for (var x=0; x<keyList.length; x++){
      try{
        localStorage.removeItem(keyList[x]);
        console.log("Deleted Keys() ", keyList[x])
      }catch(error){ }
    }
    return;
  }


}
