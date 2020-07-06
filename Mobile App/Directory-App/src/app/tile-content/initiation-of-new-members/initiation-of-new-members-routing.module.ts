import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitiationOfNewMembersPage } from './initiation-of-new-members.page';

const routes: Routes = [
  {
    path: '',
    component: InitiationOfNewMembersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitiationOfNewMembersPageRoutingModule {}
