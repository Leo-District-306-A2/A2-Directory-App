import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilityService} from '../../../services/utility.service';
import {Env} from '../../../services/env';
import { DataDirectoryService } from 'src/app/services/data-directory.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.page.html',
  styleUrls: ['./view-event.page.scss'],
})

export class ViewEventPage implements OnInit {
  viewData: any;
  eventImgUrl = null;
  constructor(private route: ActivatedRoute, private dataDirectoryService: DataDirectoryService,public utilityService: UtilityService, public env: Env) {
    route.paramMap.subscribe((data) => {
      this.viewData = JSON.parse(data.get('data'));
    });
  }

  async ngOnInit() {
    this.eventImgUrl = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.viewData.imgBaseUrl + '/' + this.viewData.bannerImg);
    for(let i=0; i<this.viewData.chairpersons.length;i++){
      this.viewData.chairpersons[i].imgUrl = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.viewData.imgBaseUrl + '/' +this.viewData.chairpersons[i].image)
    }

  }

}
