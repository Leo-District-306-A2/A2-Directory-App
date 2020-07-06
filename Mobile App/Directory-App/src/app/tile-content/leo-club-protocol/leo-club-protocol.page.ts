import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-leo-club-protocol',
  templateUrl: './leo-club-protocol.page.html',
  styleUrls: ['./leo-club-protocol.page.scss'],
})
export class LeoClubProtocolPage implements OnInit {

  viewData: any;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  ngOnInit() {
  }

}
