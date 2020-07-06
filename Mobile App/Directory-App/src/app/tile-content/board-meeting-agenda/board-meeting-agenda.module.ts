import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoardMeetingAgendaPageRoutingModule } from './board-meeting-agenda-routing.module';

import { BoardMeetingAgendaPage } from './board-meeting-agenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoardMeetingAgendaPageRoutingModule
  ],
  declarations: [BoardMeetingAgendaPage]
})
export class BoardMeetingAgendaPageModule {}
