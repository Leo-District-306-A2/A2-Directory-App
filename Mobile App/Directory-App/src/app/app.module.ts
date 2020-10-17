import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import {UtilityService} from './services/utility.service';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import {AudioService} from './services/audio.service';
import {Env} from './services/env';
import {HttpClientModule} from '@angular/common/http';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import {AlertService} from './services/alert.service';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { Network } from '@ionic-native/network/ngx';
import {NetworkService} from './services/network.service';
import {FileHandlerService} from './services/file-handler.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
      ScreenOrientation,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    CallNumber,
    EmailComposer,
    Network,
    Keyboard,
    UtilityService,
    NativeGeocoder,
    AudioService,
    Env,
    AlertService,
    FCM,
    NetworkService,
    FileHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
