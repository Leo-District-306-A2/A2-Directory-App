import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Env} from '../../../services/env';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  viewData: any;
  constructor(private route: ActivatedRoute, public env: Env) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
  }

  ngOnInit() {}

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
}
