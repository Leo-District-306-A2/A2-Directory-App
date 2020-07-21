import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CallNumber} from '@ionic-native/call-number/ngx';
import {EmailComposer} from '@ionic-native/email-composer/ngx';
import {UtilityService} from '../services/utility.service';
import {Env} from '../services/env';

@Component({
  selector: 'app-multiple-details',
  templateUrl: './multiple-details.page.html',
  styleUrls: ['./multiple-details.page.scss'],
})
export class MultipleDetailsPage implements OnInit {
  isEmailComposable = false;
  executiveDetails: any;
  imgBaseUrl: string;
  constructor(private route: ActivatedRoute,
              private callNumber: CallNumber,
              private emailComposer: EmailComposer,
              public utilityService: UtilityService,
              public env: Env) {

    // read router params
    route.paramMap.subscribe((data) => {
      this.executiveDetails = JSON.parse(data.get('multipleData'));
      this.imgBaseUrl = data.get('imgBaseUrl');
    });

    // check email composer availability
    // this.emailComposer.isAvailable().then((available: boolean) => {
    //   this.isEmailComposable = available;
    // });
  }

  ngOnInit() {
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
      console.log(data);
      window.open('geo://' + data[0].latitude + ',' + data[0].longitude + '?q=' + address, '_system');
    });
  }

}
