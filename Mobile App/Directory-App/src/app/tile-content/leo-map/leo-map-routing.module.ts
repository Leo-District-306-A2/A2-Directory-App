import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeoMapPage } from './leo-map.page';

const routes: Routes = [
  {
    path: '',
    component: LeoMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeoMapPageRoutingModule {}
