import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {FCM} from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import {NotificationService} from './services/notification.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    token;
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private screenOrientation: ScreenOrientation,
        private notificationService: NotificationService,
        public fcm: FCM,
        private router: Router
    ) {
        this.initializeApp();
      }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
            this.notification();
        });
    }

    async notification() {
        await this.fcm.requestPushPermission({
            ios9Support: {
                timeout: 10,
                interval: 0.3
            }
        });

        this.fcm.getInitialPushPayload().then((res) => {
            if (res) {
                this.router.navigate(['/tabs/notifications']);
            }
        });

        this.fcm.subscribeToTopic('general');

        this.fcm.getToken().then( token => {
            this.token = token;
        });

        this.fcm.onTokenRefresh().subscribe((token) => {
            this.token = token;
        });

        this.fcm.onNotification().subscribe(data => {
            if (data.wasTapped) {
                this.router.navigate(['/tabs/notifications']);
                this.notificationService.addNotification(data);
            } else {
                this.notificationService.addNotification(data);
            }
        });
    }
}
