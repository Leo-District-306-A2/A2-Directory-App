import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Router} from '@angular/router';
import {Env} from '../../services/env';
import {UtilityService} from '../../services/utility.service';
import { DataDirectoryService } from 'src/app/services/data-directory.service';

@Component({
  selector: 'app-guest-introductions',
  templateUrl: './guest-introductions.page.html',
  styleUrls: ['./guest-introductions.page.scss'],
})
export class GuestIntroductionsPage implements OnInit {
  guestIntroData: any;
  filteredGuestIntroData: any;
  searchKeyword: any;
  dpLogo = null;
  constructor(private homeService: HomeService,
              private router: Router,
              public utilityService: UtilityService,
              public dataDirectoryService: DataDirectoryService,
              public env: Env) {
  }

  async ngOnInit() {
    this.guestIntroData = await this.homeService.loadStaticData('GuestIntroductions');
    this.dpLogo = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl +'/' + this.guestIntroData.logo);
    for (let i=0; i<this.guestIntroData.content.length; i++){
      this.guestIntroData.content[i].imgUrl = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.getGuestImg(this.guestIntroData.content[i]));
    }
    this.filteredGuestIntroData = this.utilityService.sortJsonArrayByVisibilityOrder(this.guestIntroData.content);

  }

  getGuestImg(guest: any) {
    if (guest.img !== '') {
      return guest.img;
    } else {
      if (guest.gender === 'female') {
        return 'council/imgs/default_data/default_female_user.png';
      } else {
        return 'council/imgs/default_data/default_male_user.png';
      }
    }
  }

  viewIntro(data) {
    this.router.navigate(['tabs/home/guest-introductions/intro', {data: JSON.stringify(data)}]);
  }

  filterData() {
    this.filteredGuestIntroData = this.utilityService.searchGuest(this.utilityService.sortJsonArrayByVisibilityOrder(this.guestIntroData.content), this.searchKeyword);
  }
}
