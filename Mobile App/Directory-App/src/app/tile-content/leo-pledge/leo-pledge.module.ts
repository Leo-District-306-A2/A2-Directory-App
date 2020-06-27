import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeoPledgePageRoutingModule } from './leo-pledge-routing.module';

import { LeoPledgePage } from './leo-pledge.page';
import {CommonElementsModule} from '../../common/common-elements/common-elements.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeoPledgePageRoutingModule,
    CommonElementsModule
  ],
  declarations: [LeoPledgePage]
})
export class LeoPledgePageModule {}
