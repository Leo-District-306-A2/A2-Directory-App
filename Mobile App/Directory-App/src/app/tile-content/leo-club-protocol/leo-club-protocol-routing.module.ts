import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeoClubProtocolPage } from './leo-club-protocol.page';

const routes: Routes = [
  {
    path: '',
    component: LeoClubProtocolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeoClubProtocolPageRoutingModule {}
