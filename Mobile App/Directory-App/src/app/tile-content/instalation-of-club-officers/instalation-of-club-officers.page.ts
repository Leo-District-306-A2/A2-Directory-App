import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-instalation-of-club-officers',
  templateUrl: './instalation-of-club-officers.page.html',
  styleUrls: ['./instalation-of-club-officers.page.scss'],
})
export class InstalationOfClubOfficersPage implements OnInit {

  viewData: any;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  ngOnInit() {
  }

}
