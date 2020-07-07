import { Component,CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UtilityService} from '../../services/utility.service';


@Component({
  selector: 'app-instalation-of-club-officers',
  templateUrl: './instalation-of-club-officers.page.html',
  styleUrls: ['./instalation-of-club-officers.page.scss'],
})
export class InstalationOfClubOfficersPage implements OnInit {

  viewData: any;
  lang = 'en';
  constructor(private route: ActivatedRoute, private utilityService: UtilityService) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  ngOnInit() {
  }

  langChanged(event) {
    this.lang = event;
  }
}
