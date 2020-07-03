import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-multiple-council-chairman',
  templateUrl: './multiple-council-chairman.page.html',
  styleUrls: ['./multiple-council-chairman.page.scss'],
})
export class MultipleCouncilChairmanPage implements OnInit {

  viewData: any;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }
  ngOnInit() {
  }

}
