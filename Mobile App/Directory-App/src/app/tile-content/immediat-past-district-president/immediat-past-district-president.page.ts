import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Env} from '../../services/env';

@Component({
  selector: 'app-immediat-past-district-president',
  templateUrl: './immediat-past-district-president.page.html',
  styleUrls: ['./immediat-past-district-president.page.scss'],
})
export class ImmediatPastDistrictPresidentPage implements OnInit {

  viewData: any;

  constructor(private route: ActivatedRoute, public env: Env) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  ngOnInit() {
  }

}
