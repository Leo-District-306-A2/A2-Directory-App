import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnvironmentPledgePageRoutingModule } from './environment-pledge-routing.module';

import { EnvironmentPledgePage } from './environment-pledge.page';
import {CommonElementsModule} from '../../common/common-elements/common-elements.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EnvironmentPledgePageRoutingModule,
        CommonElementsModule
    ],
  declarations: [EnvironmentPledgePage]
})
export class EnvironmentPledgePageModule {}
