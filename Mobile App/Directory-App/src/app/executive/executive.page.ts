import { Component } from '@angular/core';
import { CouncilService } from '../services/council.service';
import { Router } from '@angular/router';
import {UtilityService} from '../services/utility.service';
import {Env} from '../services/env';
import {Platform} from '@ionic/angular';
import {AlertService} from '../services/alert.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'executive.page.html',
  styleUrls: ['executive.page.scss']
})
export class ExecutivePage {
  allCouncilData: any;
  filteredCouncilData: any;
  searchKeyword: string;
  imgBaseUrl: string;
  backSubscription;

  constructor(private councilService: CouncilService,
              private router: Router,
              private utilityService: UtilityService,
              public env: Env,
              private platform: Platform,
              private alertService: AlertService)
  {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  async ngOnInit() {
    var data = await this.councilService.getData();
    this.filteredCouncilData = data.council;
    this.allCouncilData = data.council;
    this.imgBaseUrl = data.imgBaseUrl;

    for (let i = 0; i < this.filteredCouncilData.length; i++) {
      this.filteredCouncilData[i].imgUrl = await this.councilService.readImage(
        this.env.dataDirectoryBaseUrl + '/' + this.imgBaseUrl + '/' + this.filteredCouncilData[i].logo
      );
    }
  }

  ionViewDidEnter() {
    this.backSubscription = this.platform.backButton.subscribe(() => {
      this.alertService.exitAlert();
    });
  }

  ionViewWillLeave() {
    this.backSubscription.unsubscribe();
  }

  viewCouncil(council) {
    this.router.navigate(['/tabs/executive/executive-details', {councilData: JSON.stringify(council), imgBaseUrl: this.imgBaseUrl}]);
  }

  filterData() {
    this.filteredCouncilData = this.utilityService.searchCouncil(this.allCouncilData, this.searchKeyword);
  }
}
