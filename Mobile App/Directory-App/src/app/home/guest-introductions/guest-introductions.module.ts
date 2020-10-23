import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuestIntroductionsPageRoutingModule } from './guest-introductions-routing.module';

import { GuestIntroductionsPage } from './guest-introductions.page';
import {IntroComponent} from './intro/intro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuestIntroductionsPageRoutingModule
  ],
  declarations: [GuestIntroductionsPage, IntroComponent]
})
export class GuestIntroductionsPageModule {}
