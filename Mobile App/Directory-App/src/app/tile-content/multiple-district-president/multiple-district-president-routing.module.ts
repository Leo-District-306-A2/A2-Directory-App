import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultipleDistrictPresidentPage } from './multiple-district-president.page';

const routes: Routes = [
  {
    path: '',
    component: MultipleDistrictPresidentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultipleDistrictPresidentPageRoutingModule {}
