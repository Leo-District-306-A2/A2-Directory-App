import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilityService} from '../../../services/utility.service';
import {Env} from '../../../services/env';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.page.html',
  styleUrls: ['./view-event.page.scss'],
})
export class ViewEventPage implements OnInit {
  viewData: any;
  constructor(private route: ActivatedRoute, public utilityService: UtilityService, public env: Env) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
      console.log(JSON.parse(data.get('data')));
    });
  }

  ngOnInit() {
  }

}
