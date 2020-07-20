import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Router } from '@angular/router';
import {Env} from '../services/env';

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
  editorsNote: any;
  RegionAndZone: any;
  eventCalendar: any;

  constructor(private homeService: HomeService, private router: Router, public env: Env) {
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
    this.homeService.loadStaticData('EditorsNote').then((result) => this.editorsNote = result);
    this.homeService.loadStaticData('RegionAndZoneDivision').then((result) => this.RegionAndZone = result);
    this.homeService.loadStaticData('DistrictCalendarOfEvents').then((result) => this.eventCalendar = result);
  }

  navigateToDetails(data) {
        this.router.navigate(['tabs/home/home-details', {data: JSON.stringify(data)}]);
  }

  navigateToOfficersDetails(data) {
    this.router.navigate(['tabs/home/head-officers', {data: JSON.stringify(data)}]);
  }

  navigateToOtherDetails(data) {
    this.router.navigate(['tabs/home/home-other-details', {data: JSON.stringify(data)}]);
  }
  navigateToNationalAnthem(data) {
    this.router.navigate(['tabs/home/national-anthem', {data: JSON.stringify(data)}]);
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
  navigateToLeoMap(data) {
    this.router.navigate(['tabs/home/leo-map', {data: JSON.stringify(data)}]);
  }
  navigateToLeoHistory(data) {
    this.router.navigate(['tabs/home/leo-history', {data: JSON.stringify(data)}]);
  }
  navigateToDPLogo(data) {
    this.router.navigate(['tabs/home/district-president-logo', {data: JSON.stringify(data)}]);
  }
  navigateToMultipleCouncilChairman(data) {
    this.router.navigate(['tabs/home/multiple-council-chairman', {data: JSON.stringify(data)}]);
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
  navigateToRegionAndZone(data) {
    this.router.navigate(['tabs/home/region-and-zone-devision', {data: JSON.stringify(data)}]);
  }
  navigateToDistrictCalendar(data) {
    this.router.navigate(['tabs/home/event-calendar', {data: JSON.stringify(data)}]);
  }
  navigateToEditorsNote(data) {
    this.router.navigate(['tabs/home/editors-note', {data: JSON.stringify(data)}]);
  }
}
