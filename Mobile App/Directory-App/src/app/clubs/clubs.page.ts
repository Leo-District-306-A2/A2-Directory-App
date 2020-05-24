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
  constructor(private clubService: ClubService, private router: Router, private utilityService: UtilityService) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.clubService.getData().then((data) => {
      this.filteredClubData = data;
      this.allClubsData = data;
    });
  }

  viewClub(club) {
    this.router.navigate(['/tabs/clubs/club-details', {clubData: JSON.stringify(club)}]);
  }

  filterData() {
    if (this.searchKeyword && this.searchKeyword.trim().length > 0) {
      this.filteredClubData = this.allClubsData.filter((club) => {
        return (club.clubName.toLowerCase().indexOf(this.searchKeyword.toLowerCase()) > -1);
      });
    } else {
      this.filteredClubData = this.allClubsData;
    }
  }
}
