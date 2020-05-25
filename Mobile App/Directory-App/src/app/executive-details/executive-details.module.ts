import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {ExecutiveDetailsPageRoutingModule} from './executive-details-routing.module';

import { ExecutiveDetailsPage } from './executive-details.page';
import {ClubDetailsPageModule} from '../club-details/club-details.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ExecutiveDetailsPageRoutingModule,
      ClubDetailsPageModule

    ],
      declarations: [ExecutiveDetailsPage]
  })
  export class ExecutiveDetailsPageModule {}
  