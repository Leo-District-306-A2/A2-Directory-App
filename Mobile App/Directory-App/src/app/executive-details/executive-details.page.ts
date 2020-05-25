import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { UtilityService } from '../services/utility.service';

@Component({
    selector: 'app-executive-details',
    templateUrl: './executive-details.page.html',
    styleUrls: ['./executive-details.page.scss'],
})
export class ExecutiveDetailsPage implements OnInit {
    isEmailComposable = false;
    executiveDetails: any;
    constructor(private route: ActivatedRoute,
        private callNumber: CallNumber,
        private emailComposer: EmailComposer,
        private utilityService: UtilityService) {
        // read router params
        route.paramMap.subscribe((data) => {
            this.executiveDetails = JSON.parse(data.get('councilData'));
        });

       // check email composer availability
        // this.emailComposer.isAvailable().then((available: boolean) => {
        //     this.isEmailComposable = available;
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

}
