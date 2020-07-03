import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistrictPresidentPage } from './district-president.page';

const routes: Routes = [
  {
    path: '',
    component: DistrictPresidentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistrictPresidentPageRoutingModule {}
