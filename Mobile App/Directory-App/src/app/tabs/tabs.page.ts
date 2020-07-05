import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {Keyboard} from '@ionic-native/keyboard/ngx';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {

    isHome = true;
    hideHomeFab = false;

    constructor(private router: Router, private menu: MenuController, private keyboard: Keyboard) {
        this.keyboard.onKeyboardShow().subscribe((data) => {
            this.hideHomeFab = true;
        });

        this.keyboard.onKeyboardHide().subscribe((data) => {
            this.hideHomeFab = false;
        });
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

