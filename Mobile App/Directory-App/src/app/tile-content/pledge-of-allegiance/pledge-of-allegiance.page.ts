import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pledge-of-allegiance',
  templateUrl: './pledge-of-allegiance.page.html',
  styleUrls: ['./pledge-of-allegiance.page.scss'],
})
export class PledgeOfAllegiancePage implements OnInit {

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
