import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsPage } from './docs.page';

const routes: Routes = [
  {
    path: '',
    component: DocsPage
  },
  {
    path: 'standerd-leo-club-constitution',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('../tile-content/standerd-leo-club-constitution/standerd-leo-club-constitution.module').then( m => m.StanderdLeoClubConstitutionPageModule)
  },
  {
    path: 'instalation-of-club-officers',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('../tile-content/instalation-of-club-officers/instalation-of-club-officers.module').then( m => m.InstalationOfClubOfficersPageModule)
  },
  {
    path: 'initiation-of-new-members',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('../tile-content/initiation-of-new-members/initiation-of-new-members.module').then( m => m.InitiationOfNewMembersPageModule)
  },
  {
    path: 'leo-club-protocol',
    loadChildren: () => import('../tile-content/leo-club-protocol/leo-club-protocol.module').then( m => m.LeoClubProtocolPageModule)
  },
  {
    path: 'general-meeting-agenda',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('../tile-content/general-meeting-agenda/general-meeting-agenda.module').then( m => m.GeneralMeetingAgendaPageModule)
  },
  {
    path: 'board-meeting-agenda',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('../tile-content/board-meeting-agenda/board-meeting-agenda.module').then( m => m.BoardMeetingAgendaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsPageRoutingModule {}
