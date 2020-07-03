import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistrictGovernerPageRoutingModule } from './district-governer-routing.module';

import { DistrictGovernerPage } from './district-governer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistrictGovernerPageRoutingModule
  ],
  declarations: [DistrictGovernerPage]
})
export class DistrictGovernerPageModule {}
