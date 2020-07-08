import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegionAndZoneDevisionPageRoutingModule } from './region-and-zone-devision-routing.module';

import { RegionAndZoneDevisionPage } from './region-and-zone-devision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegionAndZoneDevisionPageRoutingModule
  ],
  declarations: [RegionAndZoneDevisionPage]
})
export class RegionAndZoneDevisionPageModule {}
