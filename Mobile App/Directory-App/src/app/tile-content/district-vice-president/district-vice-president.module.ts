import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistrictVicePresidentPageRoutingModule } from './district-vice-president-routing.module';

import { DistrictVicePresidentPage } from './district-vice-president.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistrictVicePresidentPageRoutingModule
  ],
  declarations: [DistrictVicePresidentPage]
})
export class DistrictVicePresidentPageModule {}
