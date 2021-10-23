import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Env} from '../../services/env';
import { DataDirectoryService } from 'src/app/services/data-directory.service';

@Component({
  selector: 'app-district-governer',
  templateUrl: './district-governer.page.html',
  styleUrls: ['./district-governer.page.scss'],
})
export class DistrictGovernerPage implements OnInit {

  viewData: any;
  governerImgUrl = null;
  governerLogo = null;

  constructor(
    private route: ActivatedRoute, 
    public env: Env,
    public dataDirectoryService: DataDirectoryService
    ) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

   async ngOnInit() {
    this.governerImgUrl = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.viewData.imgBaseUrl + '/' + this.viewData.image);
    if (this.viewData.logo) {
      this.governerLogo = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.viewData.imgBaseUrl + '/' + this.viewData.logo);
    }
  }

}
