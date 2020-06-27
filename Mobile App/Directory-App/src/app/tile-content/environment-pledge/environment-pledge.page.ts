import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-environment-pledge',
  templateUrl: './environment-pledge.page.html',
  styleUrls: ['./environment-pledge.page.scss'],
})
export class EnvironmentPledgePage implements OnInit {

  viewData: any;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  ngOnInit() {
  }

}
