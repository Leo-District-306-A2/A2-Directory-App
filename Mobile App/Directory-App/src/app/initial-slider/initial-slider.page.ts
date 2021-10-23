import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {InitialSliderService} from '../services/initial-slider.service';
import {Env} from '../services/env';
import { DataDirectoryService } from '../services/data-directory.service';

@Component({
    selector: 'app-initial-slider',
    templateUrl: './initial-slider.page.html',
    styleUrls: ['./initial-slider.page.scss'],
})
export class InitialSliderPage implements OnInit {
    viewData: any;

    constructor(public router: Router, private initialSliderService: InitialSliderService, private dataDirectoryService: DataDirectoryService, public env: Env) {
        this.initialSliderService.getData().then((data) => {
            this.viewData = data;
            console.log(this.viewData);
            for(let i=0; i<this.viewData.sliders.length; i++){
                this.dataDirectoryService.readImage( this.env.dataDirectoryBaseUrl + '/' + this.viewData.imgBaseUrl + '/' +  this.viewData.sliders[i].icon)
                .then(img=>{
                    this.viewData.sliders[i].iconUrl = img
                })
                this.generateSliderBackgroundStyle(this.viewData.sliders[i].backgroundImgs)
                .then(style=>{
                    this.viewData.sliders[i].bgStyle = style
                })

            }
        });
    }

    async ngOnInit() {
        // console.log('on ng on init', this.viewData);
        // for(let i=0; i<this.viewData.sliders.length; i++){
        //     this.viewData.sliders[i].iconUrl = await this.dataDirectoryService.readImage( this.env.dataDirectoryBaseUrl + '/' + this.viewData.imgBaseUrl + '/' +  this.viewData.sliders[i].icon);
        //     this.viewData.sliders[i].bgStyle = await this.generateSliderBackgroundStyle(this.viewData.sliders[i].backgroundImgs);
        // }
    }

    continue() {
        localStorage.setItem('isAppUsed', 'true');
        this.router.navigate(['authentication']);
    }

    async generateSliderBackgroundStyle(backgroundImgs) {
        let style = '';
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < backgroundImgs.length; i++){
            const background: any = backgroundImgs[i];
            style += 'url(\'';
            style += await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.viewData.imgBaseUrl + '/' +background.img);
            style += '\') ' + background.position +  ' no-repeat';
            if (i !== (backgroundImgs.length - 1)) {
                style += ', ';
            }
        }
        return style;
    }
}
