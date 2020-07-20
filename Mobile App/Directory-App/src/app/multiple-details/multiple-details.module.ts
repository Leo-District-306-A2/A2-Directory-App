import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultipleDetailsPageRoutingModule } from './multiple-details-routing.module';

import { MultipleDetailsPage } from './multiple-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultipleDetailsPageRoutingModule
  ],
  declarations: [MultipleDetailsPage]
})
export class MultipleDetailsPageModule {}
