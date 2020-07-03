import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImmediatPastDistrictPresidentPage } from './immediat-past-district-president.page';

const routes: Routes = [
  {
    path: '',
    component: ImmediatPastDistrictPresidentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImmediatPastDistrictPresidentPageRoutingModule {}
