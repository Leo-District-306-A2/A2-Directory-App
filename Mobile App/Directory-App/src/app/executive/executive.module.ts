import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExecutivePage } from './executive.page';

import { ExecutiveRoutingModule } from './executive-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExecutiveRoutingModule
  ],
  declarations: [ExecutivePage]
})
export class Tab1PageModule {}
