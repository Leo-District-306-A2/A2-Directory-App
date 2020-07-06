import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-standerd-leo-club-constitution',
  templateUrl: './standerd-leo-club-constitution.page.html',
  styleUrls: ['./standerd-leo-club-constitution.page.scss'],
})
export class StanderdLeoClubConstitutionPage implements OnInit {

  viewData: any;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  ngOnInit() {
  }

}
