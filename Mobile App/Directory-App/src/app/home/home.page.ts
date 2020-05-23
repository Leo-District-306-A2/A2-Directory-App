import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  nationalAnthem: any;
  pledgeOfAllegiance: any;
  leoPledge: any;
  leoHistory: any;
  environmantalPledge: any;
  constructor(private homeService: HomeService, private router: Router) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.homeService.loadStaticData('NationalAnthem').then((result) => this.nationalAnthem = result);
    this.homeService.loadStaticData('PledgeOfAllegiance').then((result) => this.pledgeOfAllegiance = result);
    this.homeService.loadStaticData('LeoPledge').then((result) => this.leoPledge = result);
    this.homeService.loadStaticData('LeoHistory').then((result) => this.leoHistory = result);
    this.homeService.loadStaticData('EnvironmentalPledge').then((result) => this.environmantalPledge = result);
  }

  fullView(type) {
    switch (type) {
      case 'NATIONAL_ANTHEM_ENGLISH':
        this.router.navigate(['./home-details', {data: JSON.stringify(this.nationalAnthem)}]);
        break;
      case 'LEO_PLEDGE_OF_ALLEGIANCE_ENGLISH':
        this.router.navigate(['./home-details', {data: JSON.stringify(this.pledgeOfAllegiance)}]);
        break;
      case 'LEO_PLEDGE':
        this.router.navigate(['./home-details', {data: JSON.stringify(this.leoPledge)}]);
        break;
      case 'LEO_HISTORY':
        this.router.navigate(['./home-details', {data: JSON.stringify(this.leoHistory)}]);
        break;
      case 'PARISARA_PRATHIGNAWA':
        this.router.navigate(['./home-details', {data: JSON.stringify(this.environmantalPledge)}]);
        break;
      default:
        break;
    }
  }

}
