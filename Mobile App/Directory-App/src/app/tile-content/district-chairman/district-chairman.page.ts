import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Env} from '../../services/env';
import { DataDirectoryService } from 'src/app/services/data-directory.service';

@Component({
  selector: 'app-district-chairman',
  templateUrl: './district-chairman.page.html',
  styleUrls: ['./district-chairman.page.scss'],
})
export class DistrictChairmanPage implements OnInit {

  viewData: any;
  districtChairmanIngUrl = null;

  constructor(
    private route: ActivatedRoute,
    private dataDirectoryService: DataDirectoryService,
    public env: Env) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
   }

  async ngOnInit() {
    this.districtChairmanIngUrl = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.viewData.imgBaseUrl + '/' + this.viewData.image);
  }

}
