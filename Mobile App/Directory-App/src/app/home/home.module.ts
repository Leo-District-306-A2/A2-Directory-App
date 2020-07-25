import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomeRoutingModule } from './home-routing.module';
import {MessagesPage} from './messages/messages.page';
import {LanguageSliderComponent} from '../common/language-slider/language-slider.component';
import {AudioButtonComponent} from '../common/audio-button/audio-button.component';
import {PledgesComponent} from './pledges/pledges.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  declarations: [HomePage, MessagesPage, PledgesComponent],
  entryComponents: [MessagesPage]
})
export class Tab2PageModule {}
