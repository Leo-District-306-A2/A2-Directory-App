import { Component, OnInit } from '@angular/core';
import {HomeService} from '../services/home.service';
import {Router} from '@angular/router';
import {Env} from '../services/env';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.page.html',
  styleUrls: ['./docs.page.scss'],
})
export class DocsPage implements OnInit {

  standardLeoClubConstitution: any;
  instalationOfClubOfficers: any;
  initiationOfNewMembers: any;
  leoClubProtocol: any;
  generalMeetingAgenda: any;
  boardMeatingAgenda: any;

  constructor(private homeService: HomeService, private router: Router, public env: Env) { }

  ngOnInit() {
    this.homeService.loadStaticData('StandardLeoClubConstitution').then((result) => this.standardLeoClubConstitution = result);
    this.homeService.loadStaticData('InstallationCeremonyOfLeoClubOfficers').then((result) => this.instalationOfClubOfficers = result);
    this.homeService.loadStaticData('InitiationCeremonyOfNewMembers').then((result) => this.initiationOfNewMembers = result);
    this.homeService.loadStaticData('LeoClubProtocol').then((result) => this.leoClubProtocol = result);
    this.homeService.loadStaticData('GeneralMeetingAgenda').then((result) => this.generalMeetingAgenda = result);
    this.homeService.loadStaticData('BoardMeetingAgenda').then((result) => this.boardMeatingAgenda = result);
  }

  navigateToLeoClubConstitution(data) {
    this.router.navigate(['tabs/docs/standerd-leo-club-constitution', {data: JSON.stringify(data)}]);
  }
  navigateToInstalationOfClubOfficers(data) {
    this.router.navigate(['tabs/docs/instalation-of-club-officers', {data: JSON.stringify(data)}]);
  }
  navigateToInitiationOfNewMembers(data) {
    this.router.navigate(['tabs/docs/initiation-of-new-members', {data: JSON.stringify(data)}]);
  }
  navigateToLeoClubProtocol(data) {
    this.router.navigate(['tabs/docs/leo-club-protocol', {data: JSON.stringify(data)}]);
  }
  navigateToGeneralMeetingAgenda(data) {
    this.router.navigate(['tabs/home/general-meeting-agenda', {data: JSON.stringify(data)}]);
  }
  navigateToBoardMeatingAgenda(data) {
    this.router.navigate(['tabs/home/board-meeting-agenda', {data: JSON.stringify(data)}]);
  }

}
