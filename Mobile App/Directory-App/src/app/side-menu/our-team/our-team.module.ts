import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurTeamPageRoutingModule } from './our-team-routing.module';

import { OurTeamPage } from './our-team.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurTeamPageRoutingModule
  ],
  declarations: [OurTeamPage]
})
export class OurTeamPageModule {}
