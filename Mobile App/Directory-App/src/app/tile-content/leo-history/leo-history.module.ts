import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeoHistoryPageRoutingModule } from './leo-history-routing.module';

import { LeoHistoryPage } from './leo-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeoHistoryPageRoutingModule
  ],
  declarations: [LeoHistoryPage]
})
export class LeoHistoryPageModule {}
