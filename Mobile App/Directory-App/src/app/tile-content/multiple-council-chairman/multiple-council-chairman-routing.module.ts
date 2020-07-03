import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultipleCouncilChairmanPage } from './multiple-council-chairman.page';

const routes: Routes = [
  {
    path: '',
    component: MultipleCouncilChairmanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultipleCouncilChairmanPageRoutingModule {}
