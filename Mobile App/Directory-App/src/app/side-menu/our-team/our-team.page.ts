import { Component, OnInit } from '@angular/core';
import {SideMenuService} from '../../services/side-menu.service';
import {UtilityService} from '../../services/utility.service';
import {ActivatedRoute, Router} from '@angular/router';
import { DataDirectoryService } from 'src/app/services/data-directory.service';
import {Env} from '../../services/env';


@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.page.html',
  styleUrls: ['./our-team.page.scss'],
})
export class OurTeamPage implements OnInit {
  ourTeam: any;
  backRoute = '/tabs/home';
  constructor(private sideMenuService: SideMenuService,
              public utilityService: UtilityService,
              private router: Router,
              private env: Env,
              private dataDirectoryService: DataDirectoryService,
              private route: ActivatedRoute) {
    this.sideMenuService.loadStaticData('our_team').then((result) => {
      this.ourTeam = result
      for(let i=0;this.ourTeam.team.length;i++){
        console.log(this.env.dataDirectoryBaseUrl + '/' + this.ourTeam.imgBaseUrl + '/' + this.ourTeam.team[i].image, "image path of team")
        this.dataDirectoryService.readImage(this.env.dataDirectoryBaseUrl + '/' + this.ourTeam.imgBaseUrl + '/' + this.ourTeam.team[i].image)
        .then(img=>{
          this.ourTeam.team[i].imgUrl = img;
        })
      }
    });

    route.paramMap.subscribe((data) => {
      if (data) {
        this.backRoute = JSON.parse(data.get('data'));
      } else {
        this.backRoute = '/tabs/home';
      }
    });
  }

  async ngOnInit() {
    

  }

  goBack() {
    this.router.navigate([this.backRoute]).catch(() => {
      this.router.navigate(['/tabs/home']);
    });
  }

}
