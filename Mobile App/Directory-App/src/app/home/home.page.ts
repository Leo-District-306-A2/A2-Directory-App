import {Component} from '@angular/core';
import {HomeService} from '../services/home.service';
import {Router} from '@angular/router';
import {Env} from '../services/env';
import { Platform} from '@ionic/angular';
import {AlertService} from '../services/alert.service';
import { DataDirectoryService } from '../services/data-directory.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {

    nationalAnthem: any;
    leoHistory: any;
    leoMap: any;
    districtPresidentLogo: any;
    editorsNote: any;
    RegionAndZone: any;
    eventCalendar: any;
    backSubscription;
    dpLogoTileImg:any;
    isLoading = true;
    commonData: any;

    constructor(private homeService: HomeService,
                private router: Router,
                public env: Env,
                private platform: Platform,
                private dataDirectoryService: DataDirectoryService,
                private alertService: AlertService) {
    }

    // tslint:disable-next-line:use-lifecycle-interface
    async ngOnInit() {
        this.isLoading = true
        this.districtPresidentLogo = await this.homeService.loadStaticData('DistrictPresidentLogo');
        this.commonData = await this.homeService.loadStaticData('CommonDetails');
        this.dpLogoTileImg = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' +this.districtPresidentLogo.imgBaseUrl + '/' + this.districtPresidentLogo.tile)
        this.nationalAnthem = await this.homeService.loadStaticData('NationalAnthem');
        this.leoHistory = await this.homeService.loadStaticData('LeoHistory');
        this.leoMap = await this.homeService.loadStaticData('LeoMap');
        this.editorsNote = await this.homeService.loadStaticData('EditorsNote');
        this.RegionAndZone = await this.homeService.loadStaticData('RegionAndZoneDivision');
        this.eventCalendar = await this.homeService.loadStaticData('DistrictCalendarOfEvents');
        this.isLoading = false

    }

    ionViewDidEnter() {
        this.backSubscription = this.platform.backButton.subscribe(() => {
            this.alertService.exitAlert();
        });
    }

    ionViewWillLeave() {
        this.backSubscription.unsubscribe();
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

    navigateToLeoMap(data) {
        this.router.navigate(['tabs/home/leo-map', {data: JSON.stringify(data)}]);
    }

    navigateToLeoHistory(data) {
        this.router.navigate(['tabs/home/leo-history', {data: JSON.stringify(data)}]);
    }

    navigateToDPLogo(data) {
        this.router.navigate(['tabs/home/district-president-logo', {data: JSON.stringify(data)}]);
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

    navigateToMessages() {
        this.router.navigate(['tabs/home/messages']);
    }

    navigateToPledges() {
        this.router.navigate(['tabs/home/pledges']);
    }
}
