import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeoHistoryPageRoutingModule } from './leo-history-routing.module';

import { LeoHistoryPage } from './leo-history.page';
import {CommonElementsModule} from '../../common/common-elements/common-elements.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeoHistoryPageRoutingModule,
    CommonElementsModule
  ],
  declarations: [LeoHistoryPage]
})
export class LeoHistoryPageModule {}
