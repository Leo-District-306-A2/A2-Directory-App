import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultipleCouncilChairmanPageRoutingModule } from './multiple-council-chairman-routing.module';

import { MultipleCouncilChairmanPage } from './multiple-council-chairman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultipleCouncilChairmanPageRoutingModule
  ],
  declarations: [MultipleCouncilChairmanPage]
})
export class MultipleCouncilChairmanPageModule {}
