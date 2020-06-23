import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeoHistoryPage } from './leo-history.page';

const routes: Routes = [
  {
    path: '',
    component: LeoHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeoHistoryPageRoutingModule {}
