import { Component, OnInit } from '@angular/core';
import {SideMenuService} from '../../services/side-menu.service';
import {UtilityService} from '../../services/utility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.page.html',
  styleUrls: ['./our-team.page.scss'],
})
export class OurTeamPage implements OnInit {
  ourTeam: any;
  constructor(private sideMenuService: SideMenuService,
              public utilityService: UtilityService,
              private router: Router) {
    this.sideMenuService.loadStaticData('our_team').then((result) => this.ourTeam = result);
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/tabs/home']);
  }

}
