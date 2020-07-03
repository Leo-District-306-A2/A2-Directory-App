import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistrictChairmanPage } from './district-chairman.page';

const routes: Routes = [
  {
    path: '',
    component: DistrictChairmanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistrictChairmanPageRoutingModule {}
