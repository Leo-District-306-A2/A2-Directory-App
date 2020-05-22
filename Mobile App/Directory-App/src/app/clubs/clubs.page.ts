import { Component } from '@angular/core';
import { ClubService } from '../club.service';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-tab3',
  templateUrl: 'clubs.page.html',
  styleUrls: ['clubs.page.scss']
})
export class ClubsPage {
  allClubsData: any;
  filteredclubData: any;
  searchKeyword: string;
  constructor(private clubService: ClubService, private router: Router, private statusBar: StatusBar) {
    this.statusBar.backgroundColorByHexString('#0000ff');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.filteredclubData = this.clubService.getData();
    this.allClubsData = this.clubService.getData();
  }

  viewClub(club) {
    this.clubService.currentClub = club;
    this.router.navigate(['/tabs/clubs/club-details', {clubData: JSON.stringify(club)}]);
  }

  filterData() {
    if (this.searchKeyword && this.searchKeyword.trim().length > 0) {
      this.filteredclubData = this.allClubsData.filter((club) => {
        return (club.clubName.toLowerCase().indexOf(this.searchKeyword.toLowerCase()) > -1);
      });
    } else {
      this.filteredclubData = this.allClubsData;
    }
  }

}
