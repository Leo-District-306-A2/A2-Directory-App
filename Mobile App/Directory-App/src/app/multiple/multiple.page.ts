import { Component, OnInit } from '@angular/core';
import {CouncilService} from '../services/council.service';
import {Router} from '@angular/router';
import {UtilityService} from '../services/utility.service';
import {Env} from '../services/env';
import {MultipleService} from '../services/multiple.service';
import {Platform} from '@ionic/angular';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-mutiple',
  templateUrl: './multiple.page.html',
  styleUrls: ['./multiple.page.scss'],
})
export class MultiplePage implements OnInit {
  allMultipleData: any;
  filteredMultipleData: any;
  searchKeyword: string;
  imgBaseUrl: string;
  backSubscription;
  constructor(private multipleService: MultipleService,
              private router: Router,
              private utilityService: UtilityService,
              public env: Env,
              private platform: Platform,
              private alertService: AlertService) { }

  ngOnInit() {
    this.multipleService.getData().then((data) => {
      this.filteredMultipleData = data.multiple;
      this.allMultipleData = data.multiple;
      this.imgBaseUrl = data.imgBaseUrl;
    });
  }

  ionViewDidEnter() {
    this.backSubscription = this.platform.backButton.subscribe(() => {
      this.alertService.exitAlert();
    });
  }

  ionViewWillLeave() {
    this.backSubscription.unsubscribe();
  }

  viewOfficer(multiple) {
    console.log(multiple);
    this.router.navigate(['/tabs/multiple/multiple-details', {multipleData: JSON.stringify(multiple), imgBaseUrl: this.imgBaseUrl}]);
  }

  filterData() {
    this.filteredMultipleData = this.utilityService.searchCouncil(this.allMultipleData, this.searchKeyword);
  }

}
