import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  private isHome = true;
  constructor(private router: Router) {
  }

  routeHome() {
    this.router.navigate(['/tabs/home']).then(() => {
      this.isHome = true;
    });
  }

  routeOther() {
    this.isHome = false;
  }
}

