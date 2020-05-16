import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubsPage } from './clubs.page';

const routes: Routes = [
  {
    path: '',
    component: ClubsPage,
  },
  {
    path: 'club-details',
    loadChildren: () => import('../club-details/club-details.module').then( m => m.ClubDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubsRoutingModule {}
