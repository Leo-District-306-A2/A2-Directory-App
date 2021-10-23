import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {Keyboard} from '@ionic-native/keyboard/ngx';
import {NotificationService} from '../services/notification.service';
import {UtilityService} from '../services/utility.service';
import {Env} from '../services/env';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {

    isHome = true;
    hideHomeFab = false;
    appVersion:string;
    dataVersion:string;

    // tslint:disable-next-line:max-line-length
    constructor(private router: Router,
                private menu: MenuController,
                private keyboard: Keyboard,
                public notificationService: NotificationService,
                public utilityService: UtilityService,
                private env:Env
    ) {
        this.appVersion = this.env.appVersion;
        this.dataVersion = localStorage.getItem('leoisticYear') + "." +localStorage.getItem('appUpdateVersion');
        
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
    async openMenu() {
        await this.menu.enable(true, 'sideMenu');
        await this.menu.open('sideMenu');
    }

    async closeMenu() {
        await this.menu.close('sideMenu');
    }

    navigateToOurTeam() {
        this.closeMenu().then(() => {
            this.router.navigate(['/tabs/our-team', {data: JSON.stringify(this.router.url)}]);
        });
    }

    navigateToContactUs() {
        this.closeMenu().then(() => {
            this.router.navigate(['/tabs/contact-us', {data: JSON.stringify(this.router.url)}]);
        });
    }

    navigateToNotifications() {
        this.closeMenu().then(() => {
            this.router.navigate(['/tabs/notifications', {data: JSON.stringify(this.router.url)}]);
        });
    }

    clickNotificationBtn() {
        if (this.router.url.includes('/tabs/notifications')) {
            this.notificationService.markAllAsRead();
        } else {
            this.router.navigate(['/tabs/notifications', {data: JSON.stringify(this.router.url)}]);
        }
    }
}

