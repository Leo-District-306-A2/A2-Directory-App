import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistrictPresidentLogoPageRoutingModule } from './district-president-logo-routing.module';

import { DistrictPresidentLogoPage } from './district-president-logo.page';
import {CommonElementsModule} from '../../common/common-elements/common-elements.module';
import {ExpandableComponent} from '../../common/expandable/expandable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistrictPresidentLogoPageRoutingModule,
    CommonElementsModule
  ],
  declarations: [DistrictPresidentLogoPage, ExpandableComponent],
  exports: [ExpandableComponent]
})
export class DistrictPresidentLogoPageModule {}
