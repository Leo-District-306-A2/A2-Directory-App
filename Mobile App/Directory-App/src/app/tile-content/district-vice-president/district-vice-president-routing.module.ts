import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistrictVicePresidentPage } from './district-vice-president.page';

const routes: Routes = [
  {
    path: '',
    component: DistrictVicePresidentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistrictVicePresidentPageRoutingModule {}
