import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-leo-history',
  templateUrl: './leo-history.page.html',
  styleUrls: ['./leo-history.page.scss'],
})
export class LeoHistoryPage implements OnInit {

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
