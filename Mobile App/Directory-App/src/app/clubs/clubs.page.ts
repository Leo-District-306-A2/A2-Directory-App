import { Component } from '@angular/core';
import { ClubService } from '../services/club.service';
import { Router } from '@angular/router';
import {UtilityService} from '../services/utility.service';


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
  constructor(private clubService: ClubService, private router: Router, private utilityService: UtilityService) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.clubService.getData().then((data) => {
      this.filteredClubData = data.clubs;
      this.allClubsData = data.clubs;
      this.imgBaseUrl = data.imgBaseUrl;
    });
  }

  viewClub(club) {
    this.router.navigate(['/tabs/clubs/club-details', {clubData: JSON.stringify(club), imgBaseUrl: this.imgBaseUrl}]);
  }

  filterData() {
    this.filteredClubData = this.utilityService.searchClub(this.allClubsData, this.searchKeyword);
  }
}
