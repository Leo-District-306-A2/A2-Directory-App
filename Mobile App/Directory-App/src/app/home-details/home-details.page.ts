import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.page.html',
  styleUrls: ['./home-details.page.scss'],

})
export class HomeDetailsPage implements OnInit {

  viewData: any;
  filteredData: any;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
      this.filteredData = this.viewData.en;
    });
   }

  ngOnInit() {
  }

  segmentChanged(e) {
    if (e.detail.value === 'en') {
      this.filteredData = this.viewData.en;
    } else {
      this.filteredData = this.viewData.si;
    }
  }

}
