import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvironmentPledgePage } from './environment-pledge.page';

const routes: Routes = [
  {
    path: '',
    component: EnvironmentPledgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvironmentPledgePageRoutingModule {}
