import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitiationOfNewMembersPageRoutingModule } from './initiation-of-new-members-routing.module';

import { InitiationOfNewMembersPage } from './initiation-of-new-members.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitiationOfNewMembersPageRoutingModule
  ],
  declarations: [InitiationOfNewMembersPage]
})
export class InitiationOfNewMembersPageModule {}
