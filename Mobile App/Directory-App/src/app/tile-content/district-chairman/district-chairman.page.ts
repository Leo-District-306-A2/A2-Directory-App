import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Env} from '../../services/env';

@Component({
  selector: 'app-district-chairman',
  templateUrl: './district-chairman.page.html',
  styleUrls: ['./district-chairman.page.scss'],
})
export class DistrictChairmanPage implements OnInit {

  viewData: any;

  constructor(private route: ActivatedRoute, public env: Env) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  ngOnInit() {
  }

}
