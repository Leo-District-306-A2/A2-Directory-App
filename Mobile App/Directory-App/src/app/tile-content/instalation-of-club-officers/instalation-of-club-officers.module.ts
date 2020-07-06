import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstalationOfClubOfficersPageRoutingModule } from './instalation-of-club-officers-routing.module';

import { InstalationOfClubOfficersPage } from './instalation-of-club-officers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstalationOfClubOfficersPageRoutingModule
  ],
  declarations: [InstalationOfClubOfficersPage]
})
export class InstalationOfClubOfficersPageModule {}
