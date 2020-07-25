import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {InitialSliderService} from '../services/initial-slider.service';
import {Env} from '../services/env';

@Component({
    selector: 'app-initial-slider',
    templateUrl: './initial-slider.page.html',
    styleUrls: ['./initial-slider.page.scss'],
})
export class InitialSliderPage implements OnInit {
    viewData: any;

    constructor(public router: Router, private initialSliderService: InitialSliderService, public env: Env) {
        this.initialSliderService.getData().then((data) => {
            this.viewData = data;
        });
    }

    ngOnInit() {
    }

    continue() {
        localStorage.setItem('isAppUsed', 'true');
        this.router.navigate(['']);
    }

    generateSliderBackgroundStyle(backgroundImgs) {
        let style = '';
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < backgroundImgs.length; i++){
            const background: any = backgroundImgs[i];
            style += 'url(\'';
            style += this.env.baseURL + '/';
            style += this.viewData.imgBaseUrl + '/';
            style += background.img;
            style += '\') ' + background.position +  ' no-repeat';
            if (i !== (backgroundImgs.length - 1)) {
                style += ', ';
            }
        }
        return style;
    }
}
