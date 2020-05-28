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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
