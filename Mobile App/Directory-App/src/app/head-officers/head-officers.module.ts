import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeadOfficersPageRoutingModule } from './head-officers-routing.module';

import { HeadOfficersPage } from './head-officers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeadOfficersPageRoutingModule
  ],
  declarations: [HeadOfficersPage]
})
export class HeadOfficersPageModule {}
