import { Component } from '@angular/core';
import { ClubService } from '../services/club.service';
import { Router } from '@angular/router';
import {UtilityService} from '../services/utility.service';
import {Env} from '../services/env';
import {Platform} from '@ionic/angular';
import {AlertService} from '../services/alert.service';
import {UpdateService} from '../services/update.service';
import { DataDirectoryService } from '../services/data-directory.service';


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
  imgurl;

  constructor(private clubService: ClubService,
              private router: Router,
              private utilityService: UtilityService,
              public env: Env,
              private platform: Platform,
              private alertService: AlertService,
              private dataDirectoryService: DataDirectoryService
              ) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  async ngOnInit() {
    var data = await this.clubService.getData()
    this.utilityService.sortClubs(data.clubs); // sort clubs according to club name
    this.filteredClubData = data.clubs;
    this.allClubsData = data.clubs;
    this.imgBaseUrl = data.imgBaseUrl;

    for (let i = 0; i < this.filteredClubData.length; i++) {
      this.filteredClubData[i].imgUrl = await this.dataDirectoryService.readImage(
        this.env.dataDirectoryBaseUrl + '/' + this.imgBaseUrl + '/' + this.filteredClubData[i].logo
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

  viewClub(club) {
    this.router.navigate(['/tabs/clubs/club-details', {clubData: JSON.stringify(club), imgBaseUrl: this.imgBaseUrl}]);
  }

  filterData() {
    this.filteredClubData = this.utilityService.searchClub(this.allClubsData, this.searchKeyword);
  }
  
}
