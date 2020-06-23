import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistrictPresidentLogoPageRoutingModule } from './district-president-logo-routing.module';

import { DistrictPresidentLogoPage } from './district-president-logo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistrictPresidentLogoPageRoutingModule
  ],
  declarations: [DistrictPresidentLogoPage]
})
export class DistrictPresidentLogoPageModule {}
