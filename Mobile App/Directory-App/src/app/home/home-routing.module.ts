import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'home-details',
    loadChildren: () => import('../home-details/home-details.module').then( m => m.HomeDetailsPageModule)
  },
  {
    path: 'head-officers',
    loadChildren: () => import('../head-officers/head-officers.module').then( m => m.HeadOfficersPageModule)
  },
  {
    path: 'home-other-details',
    loadChildren: () => import('../home-other-details/home-other-details.module').then( m => m.HomeOtherDetailsPageModule)
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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
