import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImmediatPastDistrictPresidentPageRoutingModule } from './immediat-past-district-president-routing.module';

import { ImmediatPastDistrictPresidentPage } from './immediat-past-district-president.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImmediatPastDistrictPresidentPageRoutingModule
  ],
  declarations: [ImmediatPastDistrictPresidentPage]
})
export class ImmediatPastDistrictPresidentPageModule {}
