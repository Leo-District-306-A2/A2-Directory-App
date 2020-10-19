import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';
import {FCM} from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import {NotificationService} from './services/notification.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private screenOrientation: ScreenOrientation,
        private notificationService: NotificationService,
        private fcm: FCM
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

    notification() {

        this.fcm.subscribeToTopic('a2');


        this.fcm.getToken().then( token => {
            console.log(token);
        });

        this.fcm.onTokenRefresh().subscribe((token) => {
            console.log(token);
        });

        this.fcm.onNotification().subscribe(data => {
                this.notificationService.addNotification(data);
        });
    }
}
