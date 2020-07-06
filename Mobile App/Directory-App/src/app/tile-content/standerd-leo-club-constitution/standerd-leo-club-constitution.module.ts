import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StanderdLeoClubConstitutionPageRoutingModule } from './standerd-leo-club-constitution-routing.module';

import { StanderdLeoClubConstitutionPage } from './standerd-leo-club-constitution.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StanderdLeoClubConstitutionPageRoutingModule
  ],
  declarations: [StanderdLeoClubConstitutionPage]
})
export class StanderdLeoClubConstitutionPageModule {}
