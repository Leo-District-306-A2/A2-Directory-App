import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-district-president-logo',
  templateUrl: './district-president-logo.page.html',
  styleUrls: ['./district-president-logo.page.scss'],
})
export class DistrictPresidentLogoPage implements OnInit {

  viewData: any;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
      console.log(this.viewData);
    });
   }

  ngOnInit() {
  }

}
