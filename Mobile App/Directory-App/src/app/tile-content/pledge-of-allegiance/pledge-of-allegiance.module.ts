import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PledgeOfAllegiancePageRoutingModule } from './pledge-of-allegiance-routing.module';

import { PledgeOfAllegiancePage } from './pledge-of-allegiance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PledgeOfAllegiancePageRoutingModule
  ],
  declarations: [PledgeOfAllegiancePage]
})
export class PledgeOfAllegiancePageModule {}
