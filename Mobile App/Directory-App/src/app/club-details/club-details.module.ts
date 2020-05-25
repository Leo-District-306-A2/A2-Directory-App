import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubDetailsPageRoutingModule } from './club-details-routing.module';

import { ClubDetailsPage } from './club-details.page';
import {FooterComponent} from '../common/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubDetailsPageRoutingModule
  ],
    declarations: [ClubDetailsPage, FooterComponent],
    exports: [FooterComponent]
})
export class ClubDetailsPageModule {}
