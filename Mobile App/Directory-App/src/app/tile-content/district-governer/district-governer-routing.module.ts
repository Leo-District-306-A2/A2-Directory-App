import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistrictGovernerPage } from './district-governer.page';

const routes: Routes = [
  {
    path: '',
    component: DistrictGovernerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistrictGovernerPageRoutingModule {}
