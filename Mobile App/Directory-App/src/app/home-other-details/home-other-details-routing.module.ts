import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeOtherDetailsPage } from './home-other-details.page';

const routes: Routes = [
  {
    path: '',
    component: HomeOtherDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeOtherDetailsPageRoutingModule {}
