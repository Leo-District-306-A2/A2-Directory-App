import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-general-meeting-agenda',
  templateUrl: './general-meeting-agenda.page.html',
  styleUrls: ['./general-meeting-agenda.page.scss'],
})
export class GeneralMeetingAgendaPage implements OnInit {

  viewData: any;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  ngOnInit() {
  }

}
