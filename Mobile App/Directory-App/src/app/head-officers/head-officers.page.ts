import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-head-officers',
  templateUrl: './head-officers.page.html',
  styleUrls: ['./head-officers.page.scss'],
})
export class HeadOfficersPage implements OnInit {

  viewData: any;
  constructor(private route: ActivatedRoute) { 
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
  }

  ngOnInit() {
  }

}
