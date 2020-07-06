import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-board-meeting-agenda',
  templateUrl: './board-meeting-agenda.page.html',
  styleUrls: ['./board-meeting-agenda.page.scss'],
})
export class BoardMeetingAgendaPage implements OnInit {

  viewData: any;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  ngOnInit() {
  }

}
