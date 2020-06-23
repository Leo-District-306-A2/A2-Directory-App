import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnvironmentPledgePageRoutingModule } from './environment-pledge-routing.module';

import { EnvironmentPledgePage } from './environment-pledge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvironmentPledgePageRoutingModule
  ],
  declarations: [EnvironmentPledgePage]
})
export class EnvironmentPledgePageModule {}
