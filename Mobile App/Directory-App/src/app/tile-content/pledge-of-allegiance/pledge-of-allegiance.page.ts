import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-pledge-of-allegiance',
  templateUrl: './pledge-of-allegiance.page.html',
  styleUrls: ['./pledge-of-allegiance.page.scss']
})
export class PledgeOfAllegiancePage implements OnInit {

  viewData: any;
  lang = 'en';
  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }


  ngOnInit() {
  }

  langChanged(event) {
    this.lang = event;
  }

}
