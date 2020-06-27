import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LanguageSliderComponent} from '../language-slider/language-slider.component';
import {AudioButtonComponent} from '../audio-button/audio-button.component';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [LanguageSliderComponent, AudioButtonComponent],
  exports: [
    LanguageSliderComponent,
    AudioButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommonElementsModule { }
