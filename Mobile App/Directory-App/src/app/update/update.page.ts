import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateService } from '../services/update.service';
import { Subscription } from 'rxjs';

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
      const hasUpdates = await this.updateService.checkForUpdate();
      if (hasUpdates) {
        const updates = await this.updateService.downloadUpdate();
        if (updates.downloadState) {
          //Update completed.
          this.router.navigate(['slider']);
        } else {
          this.error.hasError = true;
          this.error.errorMessage = updates.message;
          this.showContinueBtn = true;
        }
      } else {
        //No updates available.
        this.router.navigate(['slider']);
      }

    } else if (localStorage.getItem('appUpdateVersion')) {
      this.router.navigate(['slider']);
    } else {
      this.error.hasError = true;
      this.error.errorMessage = "No Internet Connection";
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
    this.router.navigate(['slider']);
  }


}
