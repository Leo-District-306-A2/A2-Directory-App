import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Env} from '../../services/env';
import { DataDirectoryService } from 'src/app/services/data-directory.service';

@Component({
  selector: 'app-district-president',
  templateUrl: './district-president.page.html',
  styleUrls: ['./district-president.page.scss'],
})
export class DistrictPresidentPage implements OnInit {

  viewData: any;
  dpImgUrl = null;
  dpLogo = null

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
    this.dpImgUrl = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/'  + this.viewData.imgBaseUrl + '/' + this.viewData.image);
    if(this.viewData.logo){
      this.dpLogo = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.viewData.imgBaseUrl + '/' + this.viewData.logo);
    }
  }

}
