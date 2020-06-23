import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeoMapPageRoutingModule } from './leo-map-routing.module';

import { LeoMapPage } from './leo-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeoMapPageRoutingModule
  ],
  declarations: [LeoMapPage]
})
export class LeoMapPageModule {}
