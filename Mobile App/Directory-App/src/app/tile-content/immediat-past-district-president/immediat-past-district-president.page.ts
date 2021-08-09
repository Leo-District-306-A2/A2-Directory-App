import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Env} from '../../services/env';
import { DataDirectoryService } from 'src/app/services/data-directory.service';

@Component({
  selector: 'app-immediat-past-district-president',
  templateUrl: './immediat-past-district-president.page.html',
  styleUrls: ['./immediat-past-district-president.page.scss'],
})
export class ImmediatPastDistrictPresidentPage implements OnInit {

  viewData: any;
  ipdpImgUrl = null;
  ipdpLogo = null;

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
    this.ipdpImgUrl = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.viewData.imgBaseUrl + '/' + this.viewData.image);
    if (this.viewData.logo) {
      this.ipdpLogo = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.viewData.imgBaseUrl + '/' + this.viewData.logo);
    }
  }

}
