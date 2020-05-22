import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  nationalAnthemEnglish: any;
  nationalAnthemSinhala: any;
  pledgeOfAllegianceEnglish: any;
  pledgeOfAllegianceSinhala: any;
  leoPledge: any;
  leoHistory: any;
  parisaraPrathignawa: any;
  constructor(private homeService: HomeService, private router: Router, private statusBar: StatusBar) {
    this.statusBar.backgroundColorByHexString('#ff0000');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.homeService.getNationalAnthemEnglish().then((result) => this.nationalAnthemEnglish = result);
    this.homeService.getNationalAnthemSinhala().then((result) => this.nationalAnthemSinhala = result);
    this.homeService.getPledgeOfAllegianceEnglish().then((result) => this.pledgeOfAllegianceEnglish = result);
    this.homeService.getPledgeOfAllegianceSinhala().then((result) => this.pledgeOfAllegianceSinhala = result);
    this.homeService.getLeoPledge().then((result) => this.leoPledge = result);
    this.homeService.getLeoHistory().then((result) => this.leoHistory = result);
    this.homeService.getParisaraPrathignawa().then((result) => this.parisaraPrathignawa = result);
  }

  fullView(type) {
    switch (type) {
      case 'NATIONAL_ANTHEM_SINHALA':
        this.router.navigate(['./home-details', {data: JSON.stringify(this.nationalAnthemSinhala)}]);
        break;
      case 'NATIONAL_ANTHEM_ENGLISH':
        this.router.navigate(['./home-details', {data: JSON.stringify(this.nationalAnthemEnglish)}]);
        break;
      case 'LEO_PLEDGE_OF_ALLEGIANCE_SINHALA':
        this.router.navigate(['./home-details', {data: JSON.stringify(this.pledgeOfAllegianceSinhala)}]);
        break;
      case 'LEO_PLEDGE_OF_ALLEGIANCE_ENGLISH':
        this.router.navigate(['./home-details', {data: JSON.stringify(this.pledgeOfAllegianceEnglish)}]);
        break;
      case 'LEO_PLEDGE':
        this.router.navigate(['./home-details', {data: JSON.stringify(this.leoPledge)}]);
        break;
      case 'LEO_HISTORY':
        this.router.navigate(['./home-details', {data: JSON.stringify(this.leoHistory)}]);
        break;
      case 'PARISARA_PRATHIGNAWA':
        this.router.navigate(['./home-details', {data: JSON.stringify(this.parisaraPrathignawa)}]);
        break;
      default:
        break;
    }
  }

}
