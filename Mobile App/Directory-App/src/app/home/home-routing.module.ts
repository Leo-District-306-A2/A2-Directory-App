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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
