import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Env} from '../../services/env';
import { DataDirectoryService } from 'src/app/services/data-directory.service';

@Component({
  selector: 'app-district-vice-president',
  templateUrl: './district-vice-president.page.html',
  styleUrls: ['./district-vice-president.page.scss'],
})
export class DistrictVicePresidentPage implements OnInit {

  viewData: any;
  dvpImgUrl = null;

  constructor(
    private route: ActivatedRoute, 
    private dataDirectoryService: DataDirectoryService, 
    public env: Env
    ) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  async ngOnInit() {
    this.dvpImgUrl = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.viewData.imgBaseUrl + '/' + this.viewData.image);
  }

}
