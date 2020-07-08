import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; 

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.page.html',
  styleUrls: ['./event-calendar.page.scss'],
})
export class EventCalendarPage implements OnInit {

  viewData: any;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  ngOnInit() {
  }

}
