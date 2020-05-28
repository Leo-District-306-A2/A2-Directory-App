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
  multipleOfficers: any;
  leoMap: any;
  districtPresidentLogo: any;

  constructor(private homeService: HomeService, private router: Router) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.homeService.loadStaticData('NationalAnthem').then((result) => this.nationalAnthem = result);
    this.homeService.loadStaticData('PledgeOfAllegiance').then((result) => this.pledgeOfAllegiance = result);
    this.homeService.loadStaticData('LeoPledge').then((result) => this.leoPledge = result);
    this.homeService.loadStaticData('LeoHistory').then((result) => this.leoHistory = result);
    this.homeService.loadStaticData('EnvironmentalPledge').then((result) => this.environmantalPledge = result);
    this.homeService.loadStaticData('MultipleOfficers').then((result) => this.multipleOfficers = result);
    this.homeService.loadStaticData('LeoMap').then((result) => this.leoMap = result);
    this.homeService.loadStaticData('DistrictPresidentLogo').then((result) => this.districtPresidentLogo = result);
  }

  navigateToDetails(data) {
        this.router.navigate(['tabs/home/home-details', {data: JSON.stringify(data)}]);
  }
  navigateToOfficersDetails(data) {
    this.router.navigate(['tabs/home/head-officers', {data: JSON.stringify(data)}]);
  }
  navigateToOtherDetails(data){    
    this.router.navigate(['tabs/home/home-other-details', {data: JSON.stringify(data)}]);
  }

}
