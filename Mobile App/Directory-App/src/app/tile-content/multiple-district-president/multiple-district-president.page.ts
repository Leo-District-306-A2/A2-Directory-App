import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Env} from '../../services/env';
import { DataDirectoryService } from 'src/app/services/data-directory.service';

@Component({
  selector: 'app-multiple-district-president',
  templateUrl: './multiple-district-president.page.html',
  styleUrls: ['./multiple-district-president.page.scss'],
})
export class MultipleDistrictPresidentPage implements OnInit {

  viewData: any;
  mdpImgUrl = null;
  mdpLogo = null;

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
    this.mdpImgUrl = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/'  + this.viewData.imgBaseUrl + '/' + this.viewData.image);
    if(this.viewData.logo){
      this.mdpLogo = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.viewData.imgBaseUrl + '/' + this.viewData.logo);
    }
  }

}
