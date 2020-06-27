import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PledgeOfAllegiancePageRoutingModule } from './pledge-of-allegiance-routing.module';

import { PledgeOfAllegiancePage } from './pledge-of-allegiance.page';
import {CommonElementsModule} from '../../common/common-elements/common-elements.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PledgeOfAllegiancePageRoutingModule,
    CommonElementsModule
  ],
  declarations: [PledgeOfAllegiancePage]
})
export class PledgeOfAllegiancePageModule {}
