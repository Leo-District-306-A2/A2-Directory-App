import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistrictChairmanPageRoutingModule } from './district-chairman-routing.module';

import { DistrictChairmanPage } from './district-chairman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistrictChairmanPageRoutingModule
  ],
  declarations: [DistrictChairmanPage]
})
export class DistrictChairmanPageModule {}
