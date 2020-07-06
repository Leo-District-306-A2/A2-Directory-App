import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-initiation-of-new-members',
  templateUrl: './initiation-of-new-members.page.html',
  styleUrls: ['./initiation-of-new-members.page.scss'],
})
export class InitiationOfNewMembersPage implements OnInit {

  viewData: any;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  ngOnInit() {
  }

}
