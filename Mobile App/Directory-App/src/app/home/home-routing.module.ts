import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'national-anthem',
    loadChildren: () => import('../tile-content/national-anthem/national-anthem.module').then( m => m.NationalAnthemPageModule)
  },
  {
    path: 'pledge-of-alligiance',
    loadChildren: () => import('../tile-content/pledge-of-allegiance/pledge-of-allegiance.module').then( m => m.PledgeOfAllegiancePageModule)
  },
  {
    path: 'leo-pledge',
    loadChildren: () => import('../tile-content/leo-pledge/leo-pledge.module').then( m => m.LeoPledgePageModule)
  },
  {
    path: 'environment-pledge',
    loadChildren: () => import('../tile-content/environment-pledge/environment-pledge.module').then( m => m.EnvironmentPledgePageModule)
  },
  {
    path: 'leo-history',
    loadChildren: () => import('../tile-content/leo-history/leo-history.module').then( m => m.LeoHistoryPageModule)
  },
  {
    path: 'leo-map',
    loadChildren: () => import('../tile-content/leo-map/leo-map.module').then( m => m.LeoMapPageModule)
  },
  {
    path: 'district-president-logo',
    loadChildren: () => import('../tile-content/district-president-logo/district-president-logo.module').then( m => m.DistrictPresidentLogoPageModule)
  },
  {
    path: 'multiple-council-chairman',
    loadChildren: () => import('../tile-content/multiple-council-chairman/multiple-council-chairman.module').then( m => m.MultipleCouncilChairmanPageModule)
  },
  {
    path: 'district-governer',
    loadChildren: () => import('../tile-content/district-governer/district-governer.module').then( m => m.DistrictGovernerPageModule)
  },
  {
    path: 'district-president',
    loadChildren: () => import('../tile-content/district-president/district-president.module').then( m => m.DistrictPresidentPageModule)
  },
  {
    path: 'multiple-district-president',
    loadChildren: () => import('../tile-content/multiple-district-president/multiple-district-president.module').then( m => m.MultipleDistrictPresidentPageModule)
  },
  {
    path: 'immediat-past-district-president',
    loadChildren: () => import('../tile-content/immediat-past-district-president/immediat-past-district-president.module').then( m => m.ImmediatPastDistrictPresidentPageModule)
  },
  {
    path: 'district-vice-president',
    loadChildren: () => import('../tile-content/district-vice-president/district-vice-president.module').then( m => m.DistrictVicePresidentPageModule)
  },
  {
    path: 'district-chairman',
    loadChildren: () => import('../tile-content/district-chairman/district-chairman.module').then( m => m.DistrictChairmanPageModule)
  },
  {
    path: 'standerd-leo-club-constitution',
    loadChildren: () => import('../tile-content/standerd-leo-club-constitution/standerd-leo-club-constitution.module').then( m => m.StanderdLeoClubConstitutionPageModule)
  },
  {
    path: 'instalation-of-club-officers',
    loadChildren: () => import('../tile-content/instalation-of-club-officers/instalation-of-club-officers.module').then( m => m.InstalationOfClubOfficersPageModule)
  },
  {
    path: 'initiation-of-new-members',
    loadChildren: () => import('../tile-content/initiation-of-new-members/initiation-of-new-members.module').then( m => m.InitiationOfNewMembersPageModule)
  },
  {
    path: 'leo-club-protocol',
    loadChildren: () => import('../tile-content/leo-club-protocol/leo-club-protocol.module').then( m => m.LeoClubProtocolPageModule)
  },
  {
    path: 'general-meeting-agenda',
    loadChildren: () => import('../tile-content/general-meeting-agenda/general-meeting-agenda.module').then( m => m.GeneralMeetingAgendaPageModule)
  },
  {
    path: 'board-meeting-agenda',
    loadChildren: () => import('../tile-content/board-meeting-agenda/board-meeting-agenda.module').then( m => m.BoardMeetingAgendaPageModule)
  },
  {
    path: 'editors-note',
    loadChildren: () => import('../tile-content/editors-note/editors-note.module').then( m => m.EditorsNotePageModule)
  },
  {
    path: 'region-and-zone-devision',
    loadChildren: () => import('../tile-content/region-and-zone-devision/region-and-zone-devision.module').then( m => m.RegionAndZoneDevisionPageModule)
  },
  {
    path: 'event-calendar',
    loadChildren: () => import('../tile-content/event-calendar/event-calendar.module').then( m => m.EventCalendarPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
