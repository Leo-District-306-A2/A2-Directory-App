import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NationalAnthemPageRoutingModule } from './national-anthem-routing.module';

import { NationalAnthemPage } from './national-anthem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NationalAnthemPageRoutingModule
  ],
  declarations: [NationalAnthemPage]
})
export class NationalAnthemPageModule {}
