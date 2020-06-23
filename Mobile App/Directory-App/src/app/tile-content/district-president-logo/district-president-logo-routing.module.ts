import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistrictPresidentLogoPage } from './district-president-logo.page';

const routes: Routes = [
  {
    path: '',
    component: DistrictPresidentLogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistrictPresidentLogoPageRoutingModule {}
