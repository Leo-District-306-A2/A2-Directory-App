import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-leo-map',
  templateUrl: './leo-map.page.html',
  styleUrls: ['./leo-map.page.scss'],
})
export class LeoMapPage implements OnInit {

  viewData: any;
  selectedDistrictImg = 'all.png'
  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  ngOnInit() {
  }

  changeDistrict(district) {
    this.selectedDistrictImg = district;
  }

}
