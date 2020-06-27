import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {NationalAnthemPageRoutingModule} from './national-anthem-routing.module';

import {NationalAnthemPage} from './national-anthem.page';
import {CommonElementsModule} from '../../common/common-elements/common-elements.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NationalAnthemPageRoutingModule,
    CommonElementsModule
  ],
    declarations: [NationalAnthemPage],
})
export class NationalAnthemPageModule {
}
