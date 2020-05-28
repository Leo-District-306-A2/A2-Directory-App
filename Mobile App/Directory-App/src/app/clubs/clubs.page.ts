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
    
    this.filteredClubData = this.utilityService.search(this.allClubsData,this.searchKeyword);
    
  }

  innerSearch(officers,searchKeyword){
      var officerList = officers.filter((officer)=>{
        return (
          officer.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 ||
          officer.email.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 ||
          officer.address.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 ||
          officer.phone.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1 
          );
      });
      if(officerList.length > 0){
        return officers;
      }else{
        return false
      }
  }
}
