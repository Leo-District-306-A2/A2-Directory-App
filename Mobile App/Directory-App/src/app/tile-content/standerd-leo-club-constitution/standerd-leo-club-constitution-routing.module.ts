import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StanderdLeoClubConstitutionPage } from './standerd-leo-club-constitution.page';

const routes: Routes = [
  {
    path: '',
    component: StanderdLeoClubConstitutionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StanderdLeoClubConstitutionPageRoutingModule {}
