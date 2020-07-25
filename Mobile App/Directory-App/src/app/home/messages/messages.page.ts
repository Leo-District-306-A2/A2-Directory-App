import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Router} from '@angular/router';
import {Env} from '../../services/env';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  messages: any;
  constructor(private homeService: HomeService,
              private router: Router,
              public env: Env) { }

  ngOnInit() {
    this.homeService.loadStaticData('Messages').then((result) => this.messages = result);
  }

  navigateToDistrictGoverner(data) {
    this.router.navigate(['tabs/home/district-governer', {data: JSON.stringify(data)}]);
  }

  navigateToDistrictPresident(data) {
    this.router.navigate(['tabs/home/district-president', {data: JSON.stringify(data)}]);
  }

  navigateToMultipleDistrictPresident(data) {
    this.router.navigate(['tabs/home/multiple-district-president', {data: JSON.stringify(data)}]);
  }

  navigateToImmediatePasetDistrictPresident(data) {
    this.router.navigate(['tabs/home/immediat-past-district-president', {data: JSON.stringify(data)}]);
  }

  navigateToDistrictVicePresident(data) {
    this.router.navigate(['tabs/home/district-vice-president', {data: JSON.stringify(data)}]);
  }

  navigateToDistrictChairman(data) {
    this.router.navigate(['tabs/home/district-chairman', {data: JSON.stringify(data)}]);
  }


}
