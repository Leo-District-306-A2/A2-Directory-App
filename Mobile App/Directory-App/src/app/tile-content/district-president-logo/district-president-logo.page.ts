import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UtilityService} from '../../services/utility.service';
import {Env} from '../../services/env';
import { DataDirectoryService } from 'src/app/services/data-directory.service';

@Component({
    selector: 'app-district-president-logo',
    templateUrl: './district-president-logo.page.html',
    styleUrls: ['./district-president-logo.page.scss'],
})
export class DistrictPresidentLogoPage implements OnInit {

    viewData: any;
    collapseditemId = 0;
    logoUrl: string;
    logoProperties:any;
    completeLogoImgUrl:any;

    constructor(private route: ActivatedRoute,
                public utilityService: UtilityService,
                public dataDirectoryService: DataDirectoryService,
                 public env: Env) {
        route.paramMap.subscribe((data) => {
            this.viewData = JSON.parse(data.get('data'));
            this.logoUrl = this.viewData.image;
            console.log(this.logoUrl);
            console.log(this.viewData);
        });
    }

    async ngOnInit() {
       this.logoProperties = this.utilityService.sortJsonArrayByVisibilityOrder(this.viewData.properties);
        this.completeLogoImgUrl = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.viewData.imgBaseUrl + '/' + this.viewData.image);
        this.logoUrl = this.completeLogoImgUrl;
       for (let i=0; i<this.logoProperties.length; i++){
           this.logoProperties[i]['imageUrl'] = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.viewData.imgBaseUrl + '/' + this.logoProperties[i].image);
       }
    }

    toggleCollapsing(id, property: any) {
        if (this.collapseditemId === id) {
            this.collapseditemId = 0;
            this.logoUrl = this.completeLogoImgUrl;
        } else {
            this.collapseditemId = id;
            this.logoUrl = property.imageUrl;
        }
    }

}
