import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PledgeOfAllegiancePage } from './pledge-of-allegiance.page';

const routes: Routes = [
  {
    path: '',
    component: PledgeOfAllegiancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PledgeOfAllegiancePageRoutingModule {}
