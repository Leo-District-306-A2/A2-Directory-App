import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventCalendarPage } from './event-calendar.page';

const routes: Routes = [
  {
    path: '',
    component: EventCalendarPage
  },  {
    path: 'view-event',
    loadChildren: () => import('./view-event/view-event.module').then( m => m.ViewEventPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventCalendarPageRoutingModule {}
