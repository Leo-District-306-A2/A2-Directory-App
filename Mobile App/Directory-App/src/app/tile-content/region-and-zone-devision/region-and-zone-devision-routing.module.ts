import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionAndZoneDevisionPage } from './region-and-zone-devision.page';

const routes: Routes = [
  {
    path: '',
    component: RegionAndZoneDevisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionAndZoneDevisionPageRoutingModule {}
