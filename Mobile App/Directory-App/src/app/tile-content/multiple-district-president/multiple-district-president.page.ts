import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Env} from '../../services/env';

@Component({
  selector: 'app-multiple-district-president',
  templateUrl: './multiple-district-president.page.html',
  styleUrls: ['./multiple-district-president.page.scss'],
})
export class MultipleDistrictPresidentPage implements OnInit {

  viewData: any;

  constructor(private route: ActivatedRoute, public env: Env) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  ngOnInit() {
  }

}
