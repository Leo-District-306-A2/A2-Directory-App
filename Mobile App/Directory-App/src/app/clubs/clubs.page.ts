import { Component } from '@angular/core';
import { ClubService } from '../club.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'clubs.page.html',
  styleUrls: ['clubs.page.scss']
})
export class ClubsPage {
  fullData: any
  clubData: any
  

  constructor(private clubService: ClubService, private router:Router) {}

  ngOnInit(){
    var data = this.clubService.getData()
    this.clubData = data;
    this.fullData = data;
    console.log(data);
  }

  gotoClubFullDetails(club){
    this.clubService.currentClub = club;
    this.router.navigate(['/club-details']);
  }

  getItems(e:any){
    var val = e.target.value
    if (val && val.trim() != '') {
      this.clubData = this.fullData.filter((item) => {
        return (item.clubName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    console.log(this.clubData)
    
  }

}
