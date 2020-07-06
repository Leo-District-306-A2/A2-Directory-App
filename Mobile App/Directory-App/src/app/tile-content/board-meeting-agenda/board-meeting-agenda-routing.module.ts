import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardMeetingAgendaPage } from './board-meeting-agenda.page';

const routes: Routes = [
  {
    path: '',
    component: BoardMeetingAgendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardMeetingAgendaPageRoutingModule {}
