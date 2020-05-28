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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
