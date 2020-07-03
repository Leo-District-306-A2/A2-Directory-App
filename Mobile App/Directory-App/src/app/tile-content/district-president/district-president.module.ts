import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistrictPresidentPageRoutingModule } from './district-president-routing.module';

import { DistrictPresidentPage } from './district-president.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistrictPresidentPageRoutingModule
  ],
  declarations: [DistrictPresidentPage]
})
export class DistrictPresidentPageModule {}
