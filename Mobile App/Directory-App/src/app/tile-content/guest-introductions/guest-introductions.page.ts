import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Router} from '@angular/router';
import {Env} from '../../services/env';
import {UtilityService} from '../../services/utility.service';

@Component({
  selector: 'app-guest-introductions',
  templateUrl: './guest-introductions.page.html',
  styleUrls: ['./guest-introductions.page.scss'],
})
export class GuestIntroductionsPage implements OnInit {
  guestIntroData: any;
  constructor(private homeService: HomeService,
              private router: Router,
              public utilityService: UtilityService,
              public env: Env) {
  }

  ngOnInit() {
    this.homeService.loadStaticData('GuestIntroductions').then((result) => {
      this.guestIntroData = result;
      console.log(result);
    });
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
}
