import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateService } from '../services/update.service';
import { Subscription } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

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
  public hasInternet: boolean

  updateDownloadingProgressSubscription: Subscription;

  constructor(public router: Router, private updateService: UpdateService) {
    this.hasInternet = navigator.onLine;

  }

  async ngOnInit() {
    this.updateDownloadingProgressSubscription = this.updateService.updateDownloadingProgress.subscribe(progress => {
      this.displayMsg = progress;
    })
    if (this.hasInternet) {
      this.displayMsg = 'Cheking for Updates';
      const updateConfig = await this.updateService.checkForUpdate();      
      this.updateDescription = updateConfig.updateDescription;
      this.size = updateConfig.size;
      if (updateConfig.hasUpdates) {
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
      } else {
        //No updates available.
        sessionStorage.setItem('isAppOppend', String(true));
        this.router.navigate(['slider']);
      }

    } else if (localStorage.getItem('appUpdateVersion')) {
      sessionStorage.setItem('isAppOppend', String(true));
      this.router.navigate(['slider']);
    } else {
      this.error.hasError = true;
      this.error.errorMessage = "A2 Directory need to download initial data<br>Please connect your device to the internet!";
      this.showContinueBtn = false;
    }

  }

  ngOnDestroy() {
    this.updateDownloadingProgressSubscription.unsubscribe();
  }

  async retryForUpdate() {
    this.error.hasError = false;
    this.error.errorMessage = '';
    this.showContinueBtn = false;
    const updateConfig = await this.updateService.checkForUpdate();      
    this.updateDescription = updateConfig.updateDescription;
    this.size = updateConfig.size;
    const updates = await this.updateService.downloadUpdate();
    if (updates.downloadState) {
      //Update completed.
      this.router.navigate(['slider']);
    } else {
      this.error.hasError = true;
      this.error.errorMessage = updates.message;
      this.showContinueBtn = true;
    }

  }

  continue() {
    sessionStorage.setItem('isAppOppend', String(true));
    this.router.navigate(['slider']);
  }


}
