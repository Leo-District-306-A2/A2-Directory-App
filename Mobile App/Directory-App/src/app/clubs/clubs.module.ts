import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClubsPage } from './clubs.page';

import { ClubsRoutingModule } from './clubs-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ClubsPage }]),
    ClubsRoutingModule,
  ],
  declarations: [ClubsPage]
})
export class Tab3PageModule {}
