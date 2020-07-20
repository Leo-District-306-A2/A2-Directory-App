import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiplePage } from './multiple.page';

const routes: Routes = [
  {
    path: '',
    component: MultiplePage,
  },
  {
    path: 'multiple-details',
    loadChildren: () => import('../multiple-details/multiple-details.module').then( m => m.MultipleDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiplePageRoutingModule {}
