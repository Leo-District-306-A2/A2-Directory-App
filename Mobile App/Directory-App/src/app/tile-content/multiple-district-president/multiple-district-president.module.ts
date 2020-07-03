import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultipleDistrictPresidentPageRoutingModule } from './multiple-district-president-routing.module';

import { MultipleDistrictPresidentPage } from './multiple-district-president.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultipleDistrictPresidentPageRoutingModule
  ],
  declarations: [MultipleDistrictPresidentPage]
})
export class MultipleDistrictPresidentPageModule {}
