import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocsPageRoutingModule } from './docs-routing.module';

import { DocsPage } from './docs.page';
import { CommonElementsModule } from '../common/common-elements/common-elements.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocsPageRoutingModule, CommonElementsModule
  ],
  declarations: [DocsPage]
})
export class DocsPageModule {}
