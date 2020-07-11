import { Component, OnInit } from '@angular/core';
import {SideMenuService} from '../../services/side-menu.service';
import {UtilityService} from '../../services/utility.service';
import {ActivatedRoute, Router} from '@angular/router';

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
              private route: ActivatedRoute) {
    this.sideMenuService.loadStaticData('our_team').then((result) => this.ourTeam = result);

    route.paramMap.subscribe((data) => {
      if (data) {
        this.backRoute = JSON.parse(data.get('data'));
      } else {
        this.backRoute = '/tabs/home';
      }
    });
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate([this.backRoute]).catch(() => {
      this.router.navigate(['/tabs/home']);
    });
  }

}
