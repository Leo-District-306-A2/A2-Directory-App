import { Component, OnInit } from '@angular/core';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.page.html',
  styleUrls: ['./club-details.page.scss'],
})
export class ClubDetailsPage implements OnInit {
  clubDetails:any

  constructor(private clubService: ClubService) { }

  ngOnInit() {
    this.clubDetails = this.clubService.currentClub
  }

}
