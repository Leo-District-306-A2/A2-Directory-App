import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeoPledgePageRoutingModule } from './leo-pledge-routing.module';

import { LeoPledgePage } from './leo-pledge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeoPledgePageRoutingModule
  ],
  declarations: [LeoPledgePage]
})
export class LeoPledgePageModule {}
