import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { UtilityService } from '../services/utility.service';
import { CouncilService } from '../services/council.service';
import {Env} from '../services/env';

@Component({
    selector: 'app-executive-details',
    templateUrl: './executive-details.page.html',
    styleUrls: ['./executive-details.page.scss'],
})
export class ExecutiveDetailsPage implements OnInit {
    isEmailComposable = false;
    executiveDetails: any;
    imgBaseUrl: string;
    sortedOfficers:any;
    constructor(private route: ActivatedRoute,
                private callNumber: CallNumber,
                private emailComposer: EmailComposer,
                public utilityService: UtilityService,
                private counsilService: CouncilService,
                public env: Env) {
        // read router params
        route.paramMap.subscribe((data) => {
            this.executiveDetails = JSON.parse(data.get('councilData'));
            this.imgBaseUrl = data.get('imgBaseUrl');
        });

      // check email composer availability
        this.emailComposer.isAvailable().then((available: boolean) => {
            this.isEmailComposable = available;
        });
    }

    async ngOnInit() {
        this.sortedOfficers = this.utilityService.sortJsonArrayByVisibilityOrder(this.executiveDetails.officers);
        for (let i = 0; i < this.sortedOfficers.length; i++) {
            this.sortedOfficers[i].officerImageUrl = await this.counsilService.readImage(
              this.env.dataDirectoryBaseUrl + '/' + this.imgBaseUrl + '/' + this.sortedOfficers[i].img
              );
          }

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
