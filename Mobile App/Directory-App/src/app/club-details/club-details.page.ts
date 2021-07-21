import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CallNumber} from '@ionic-native/call-number/ngx';
import {EmailComposer} from '@ionic-native/email-composer/ngx';
import {UtilityService} from '../services/utility.service';
import {Env} from '../services/env';
import { ClubService } from '../services/club.service';


@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.page.html',
  styleUrls: ['./club-details.page.scss'],
})
export class ClubDetailsPage implements OnInit {
  isEmailComposable = false;
  isNavigatable = false;
  clubDetails: any;
  imgBaseUrl: string;
  sortedOfficers:any;
  clubLogoImageUrl;
  constructor(private route: ActivatedRoute,
              private callNumber: CallNumber,
              private emailComposer: EmailComposer,
              public utilityService: UtilityService,
              public clubService: ClubService,
              public env: Env) {
    // read router params
    route.paramMap.subscribe((data) => {
        this.clubDetails = JSON.parse(data.get('clubData'));
        this.imgBaseUrl = data.get('imgBaseUrl');
      });

   // check email composer availability
    this.emailComposer.isAvailable().then((available: boolean) => {
      this.isEmailComposable = available;
    });
  }

  async ngOnInit() {
    this.sortedOfficers = this.utilityService.sortJsonArrayByVisibilityOrder(this.clubDetails.officers);
    for (let i = 0; i < this.sortedOfficers.length; i++) {
      this.sortedOfficers[i].officerImageUrl = await this.clubService.readImage(
        this.env.dataDirectoryBaseUrl + '/' + this.imgBaseUrl + '/' + this.sortedOfficers[i].img
        );
    }
    this.clubLogoImageUrl = await this.clubService.readImage(
      this.env.dataDirectoryBaseUrl + '/' + this.imgBaseUrl + '/' + this.clubDetails.logo
    );

  }

  // tslint:disable-next-line:variable-name
  dial(number) {
    this.callNumber.callNumber(number, true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
  }

  openEmail(email) {
    if (this.isEmailComposable) {
      const template = {
        to: email
      };
      this.emailComposer.open(template);
    }
  }

  openLocation(address) {
    this.utilityService.getLatLongFromAddress(address).then(data => {
      window.open('geo://' + data[0].latitude + ',' + data[0].longitude + '?q=' + address, '_system');
    });
  }
}
