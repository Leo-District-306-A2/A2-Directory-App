import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstalationOfClubOfficersPage } from './instalation-of-club-officers.page';

const routes: Routes = [
  {
    path: '',
    component: InstalationOfClubOfficersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstalationOfClubOfficersPageRoutingModule {}
