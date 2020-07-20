import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { MultiplePage } from './multiple.page';
import {MultiplePageRoutingModule} from './multiple-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiplePageRoutingModule
  ],
  declarations: [MultiplePage]
})
export class MultiplePageModule {}
