import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Router} from '@angular/router';
import {Env} from '../../services/env';
import { DataDirectoryService } from 'src/app/services/data-directory.service';

@Component({
  selector: 'app-pledges',
  templateUrl: './pledges.component.html',
  styleUrls: ['./pledges.component.scss'],
})
export class PledgesComponent implements OnInit {
  pledgeOfAllegiance: any;
  leoPledge: any;
  environmantalPledge: any;
  tiles:any;
  pledgeOfEligianceTileImg:any;
  leoPledgeTileImg:any;
  environmentTileImg:any;
  loading = true;
  constructor(private homeService: HomeService,
              private router: Router,
              private dataDirectoryService: DataDirectoryService,
              public env: Env) { }

  async ngOnInit() {
    this.loading = true;
    this.pledgeOfAllegiance = await this.homeService.loadStaticData('PledgeOfAllegiance');
    this.leoPledge = await this.homeService.loadStaticData('LeoPledge');
    this.environmantalPledge = await this.homeService.loadStaticData('EnvironmentalPledge');
    this.tiles = await this.homeService.loadStaticData('tiles');
    this.pledgeOfEligianceTileImg = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.tiles.pledgeOfAllegiance);
    this.leoPledgeTileImg = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.tiles.leoPledge);
    this.environmentTileImg = await this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.tiles.environmentalPldge);
    this.loading = false;
  }

  navigateToPledgeOfAllegiance(data) {
    this.router.navigate(['tabs/home/pledge-of-alligiance', {data: JSON.stringify(data)}]);
  }

  navigateToLeoPledge(data) {
    this.router.navigate(['tabs/home/leo-pledge', {data: JSON.stringify(data)}]);
  }

  navigateToEnvironmentPledge(data) {
    this.router.navigate(['tabs/home/environment-pledge', {data: JSON.stringify(data)}]);
  }
}
