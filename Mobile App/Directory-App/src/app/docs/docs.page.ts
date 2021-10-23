import { Component, OnInit } from '@angular/core';
import {HomeService} from '../services/home.service';
import {Router} from '@angular/router';
import {Env} from '../services/env';
import {Platform} from '@ionic/angular';
import {AlertService} from '../services/alert.service';
import { DataDirectoryService } from '../services/data-directory.service';

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
  backSubscription;
  tiles:any;
  leoClubConstitutionTileImg:any;
  installationCeremonyTileImg:any;
  initationCeremonyTileImg:any;
  leoClubProtocolTileImg:any;
  gmAgendaTileImg:any;
  bmAgendaTileImg:any;
  loading = true;
  constructor(private homeService: HomeService,
              private router: Router,
              public env: Env,
              private platform: Platform,
              private dataDirectoryService: DataDirectoryService,
              private alertService: AlertService) { }

  async ngOnInit() {
    this.loading = true;
    this.standardLeoClubConstitution = await this.homeService.loadStaticData('StandardLeoClubConstitution');
    this.instalationOfClubOfficers = await this.homeService.loadStaticData('InstallationCeremonyOfLeoClubOfficers');
    this.initiationOfNewMembers = await this.homeService.loadStaticData('InitiationCeremonyOfNewMembers');
    this.leoClubProtocol =await this.homeService.loadStaticData('LeoClubProtocol');
    this.generalMeetingAgenda = await this.homeService.loadStaticData('GeneralMeetingAgenda');
    this.boardMeatingAgenda = await this.homeService.loadStaticData('BoardMeetingAgenda');
    this.tiles = await this.homeService.loadStaticData('tiles');
    this.leoClubConstitutionTileImg = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.tiles.leoClubConstitution);
    this.installationCeremonyTileImg = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.tiles.instalationCeremony);
    this.initationCeremonyTileImg = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.tiles.initiationCeremony);
    this.leoClubProtocolTileImg = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.tiles.protocols);
    this.gmAgendaTileImg = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.tiles.generalMeetingAgenda);
    this.bmAgendaTileImg = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.tiles.boardMeetingAgenda);
    this.loading = false;
  }

  ionViewDidEnter() {
    this.backSubscription = this.platform.backButton.subscribe(() => {
      this.alertService.exitAlert();
    });
  }

  ionViewWillLeave() {
    this.backSubscription.unsubscribe();
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
    this.router.navigate(['tabs/docs/general-meeting-agenda', {data: JSON.stringify(data)}]);
  }
  navigateToBoardMeatingAgenda(data) {
    this.router.navigate(['tabs/docs/board-meeting-agenda', {data: JSON.stringify(data)}]);
  }

}
