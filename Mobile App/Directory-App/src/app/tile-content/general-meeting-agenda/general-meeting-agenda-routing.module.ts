import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralMeetingAgendaPage } from './general-meeting-agenda.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralMeetingAgendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralMeetingAgendaPageRoutingModule {}
