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
import {ExpandableComponent} from './common/expandable/expandable.component';
import {Env} from './services/env';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, CommonModule, ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    CallNumber,
    EmailComposer,
    Keyboard,
    UtilityService,
    NativeGeocoder,
    AudioService,
    Env
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
