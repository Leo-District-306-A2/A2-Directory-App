import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-region-and-zone-devision',
  templateUrl: './region-and-zone-devision.page.html',
  styleUrls: ['./region-and-zone-devision.page.scss'],
})
export class RegionAndZoneDevisionPage implements OnInit {

  viewData: any;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }


  ngOnInit() {
  }

}
