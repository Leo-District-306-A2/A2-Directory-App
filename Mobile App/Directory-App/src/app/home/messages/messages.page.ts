import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Router} from '@angular/router';
import {Env} from '../../services/env';
import { DataDirectoryService } from 'src/app/services/data-directory.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  messages: any;
  districtGovernerTileImg = '../../../assets/default_data/default_male_user.png';
  districtPresidentTileImg = '../../../assets/default_data/default_male_user.png';
  mulipleDistrictPresidentTileImg = '../../../assets/default_data/default_male_user.png';
  immediatepastDistrictPresidentTileImg = '../../../assets/default_data/default_male_user.png';
  districtVicePresidentTileImg = '../../../assets/default_data/default_male_user.png';
  districtChairmanTileImg = '../../../assets/default_data/default_male_user.png';
  guestIntoCount:any;

  constructor(private homeService: HomeService,
              private router: Router,
              private dataDirectoryService: DataDirectoryService,
              public env: Env) { }

  async ngOnInit() {
    this.messages = await this.homeService.loadStaticData('Messages');  
    var guestIntro = await this.homeService.loadStaticData('GuestIntroductions');
    this.guestIntoCount = guestIntro.content.length;
    this.districtGovernerTileImg = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl+'/'+this.messages.imgBaseUrl+'/'+this.messages.districtGovernor.tile);
    this.districtPresidentTileImg = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl+'/'+this.messages.imgBaseUrl+'/'+this.messages.districtPresident.tile);
    this.mulipleDistrictPresidentTileImg = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl+'/'+this.messages.imgBaseUrl+'/'+this.messages.MultipleDistrictPresident.tile);
    this.immediatepastDistrictPresidentTileImg = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl+'/'+this.messages.imgBaseUrl+'/'+this.messages.immediatePastDistrictPresident.tile);
    this.districtVicePresidentTileImg = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl+'/'+this.messages.imgBaseUrl+'/'+this.messages.districtVicePresident.tile);
    this.districtChairmanTileImg = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl+'/'+this.messages.imgBaseUrl+'/'+this.messages.districtChairman.tile);

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

  navigateToGuestIntro() {
    this.router.navigate(['tabs/home/guest-introductions']);
  }
}
