import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Env} from '../../services/env';

@Component({
  selector: 'app-district-vice-president',
  templateUrl: './district-vice-president.page.html',
  styleUrls: ['./district-vice-president.page.scss'],
})
export class DistrictVicePresidentPage implements OnInit {

  viewData: any;

  constructor(private route: ActivatedRoute, public env: Env) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  ngOnInit() {
  }

}
