import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UtilityService} from '../../services/utility.service';

@Component({
  selector: 'app-region-and-zone-devision',
  templateUrl: './region-and-zone-devision.page.html',
  styleUrls: ['./region-and-zone-devision.page.scss'],
})
export class RegionAndZoneDevisionPage implements OnInit {

  viewData: any;
  region = 'A';

  constructor(public route: ActivatedRoute, public utilityService: UtilityService) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }


  ngOnInit() {
  }

  changeRegion(region) {
    this.region = region;
  }

}
