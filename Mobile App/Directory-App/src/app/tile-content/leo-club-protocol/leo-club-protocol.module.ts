import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeoClubProtocolPageRoutingModule } from './leo-club-protocol-routing.module';

import { LeoClubProtocolPage } from './leo-club-protocol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeoClubProtocolPageRoutingModule
  ],
  declarations: [LeoClubProtocolPage]
})
export class LeoClubProtocolPageModule {}
