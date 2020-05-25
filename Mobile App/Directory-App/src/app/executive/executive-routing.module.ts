import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExecutivePage } from './executive.page';

const routes: Routes = [
  {
    path: '',
    component: ExecutivePage,
  },
  {
    path: 'executive-details',
    loadChildren: () => import('../executive-details/executive-details.module').then( m => m.ExecutiveDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutiveRoutingModule { }
