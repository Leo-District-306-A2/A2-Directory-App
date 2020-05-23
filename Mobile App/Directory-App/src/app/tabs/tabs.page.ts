import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  private isHome = true;
  constructor(private router: Router, private menu: MenuController) {
  }

  routeHome() {
    this.router.navigate(['/tabs/home']).then(() => {
      this.isHome = true;
    });
  }

  routeOther() {
    this.isHome = false;
  }

  // menu related functions
  async toggleMenu() {
    await this.menu.enable(true, 'sideMenu');
    await this.menu.toggle('sideMenu');
  }
}

