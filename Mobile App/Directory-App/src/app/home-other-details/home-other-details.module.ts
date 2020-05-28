import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeOtherDetailsPageRoutingModule } from './home-other-details-routing.module';

import { HomeOtherDetailsPage } from './home-other-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeOtherDetailsPageRoutingModule
  ],
  declarations: [HomeOtherDetailsPage]
})
export class HomeOtherDetailsPageModule {}
