import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralMeetingAgendaPageRoutingModule } from './general-meeting-agenda-routing.module';

import { GeneralMeetingAgendaPage } from './general-meeting-agenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralMeetingAgendaPageRoutingModule
  ],
  declarations: [GeneralMeetingAgendaPage]
})
export class GeneralMeetingAgendaPageModule {}
