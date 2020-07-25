import { Component } from '@angular/core';
import { ClubService } from '../services/club.service';
import { Router } from '@angular/router';
import {UtilityService} from '../services/utility.service';
import {Env} from '../services/env';
import {Platform} from '@ionic/angular';
import {AlertService} from '../services/alert.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'clubs.page.html',
  styleUrls: ['clubs.page.scss']
})
export class ClubsPage {
  allClubsData: any;
  filteredClubData: any;
  searchKeyword: string;
  imgBaseUrl: string;
  backSubscription;
  constructor(private clubService: ClubService,
              private router: Router,
              private utilityService: UtilityService,
              public env: Env,
              private platform: Platform,
              private alertService: AlertService) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.clubService.getData().then((data) => {
      this.filteredClubData = data.clubs;
      this.allClubsData = data.clubs;
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

  viewClub(club) {
    this.router.navigate(['/tabs/clubs/club-details', {clubData: JSON.stringify(club), imgBaseUrl: this.imgBaseUrl}]);
  }

  filterData() {
    this.filteredClubData = this.utilityService.searchClub(this.allClubsData, this.searchKeyword);
  }
}
