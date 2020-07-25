import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Router} from '@angular/router';
import {Env} from '../../services/env';

@Component({
  selector: 'app-pledges',
  templateUrl: './pledges.component.html',
  styleUrls: ['./pledges.component.scss'],
})
export class PledgesComponent implements OnInit {
  pledgeOfAllegiance: any;
  leoPledge: any;
  environmantalPledge: any;
  constructor(private homeService: HomeService,
              private router: Router,
              public env: Env) { }

  ngOnInit() {
    this.homeService.loadStaticData('PledgeOfAllegiance').then((result) => this.pledgeOfAllegiance = result);
    this.homeService.loadStaticData('LeoPledge').then((result) => this.leoPledge = result);
    this.homeService.loadStaticData('EnvironmentalPledge').then((result) => this.environmantalPledge = result);

  }

  navigateToPledgeOfAllegiance(data) {
    this.router.navigate(['tabs/home/pledge-of-alligiance', {data: JSON.stringify(data)}]);
  }

  navigateToLeoPledge(data) {
    this.router.navigate(['tabs/home/leo-pledge', {data: JSON.stringify(data)}]);
  }

  navigateToEnvironmentPledge(data) {
    this.router.navigate(['tabs/home/environment-pledge', {data: JSON.stringify(data)}]);
  }
}
