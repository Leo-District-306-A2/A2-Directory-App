import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilityService} from '../../services/utility.service';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.page.html',
  styleUrls: ['./event-calendar.page.scss'],
})
export class EventCalendarPage implements OnInit {

  viewData: any;

  constructor(private route: ActivatedRoute, public utilityService: UtilityService, private router: Router) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  ngOnInit() {
  }

  viewEvent(event, imageBaseUrl) {
    event.imgBaseUrl = imageBaseUrl;
    this.router.navigate(['tabs/home/event-calendar/view-event', {data: JSON.stringify(event)}]);
  }
}
