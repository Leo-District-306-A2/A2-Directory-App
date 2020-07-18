import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UtilityService} from '../../services/utility.service';
import {Env} from '../../services/env';

@Component({
    selector: 'app-district-president-logo',
    templateUrl: './district-president-logo.page.html',
    styleUrls: ['./district-president-logo.page.scss'],
})
export class DistrictPresidentLogoPage implements OnInit {

    viewData: any;
    collapseditemId = 0;
    logoUrl: string;

    constructor(private route: ActivatedRoute,
                public utilityService: UtilityService, public env: Env) {
        route.paramMap.subscribe((data) => {
            this.viewData = JSON.parse(data.get('data'));
            this.logoUrl = this.viewData.image;
            console.log(this.viewData);
        });
    }

    ngOnInit() {
    }

    toggleCollapsing(id, property: any) {
        if (this.collapseditemId === id) {
            this.collapseditemId = 0;
            this.logoUrl = this.viewData.image;
        } else {
            this.collapseditemId = id;
            this.logoUrl = property.image;
        }
    }

}
