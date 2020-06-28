import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitialSliderPageRoutingModule } from './initial-slider-routing.module';

import { InitialSliderPage } from './initial-slider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitialSliderPageRoutingModule
  ],
  declarations: [InitialSliderPage]
})
export class InitialSliderPageModule {}
