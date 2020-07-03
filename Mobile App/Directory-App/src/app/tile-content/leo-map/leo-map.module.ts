import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeoMapPageRoutingModule } from './leo-map-routing.module';

import { LeoMapPage } from './leo-map.page';
import {CommonElementsModule} from '../../common/common-elements/common-elements.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeoMapPageRoutingModule,
    CommonElementsModule
  ],
  declarations: [LeoMapPage]
})
export class LeoMapPageModule {}
