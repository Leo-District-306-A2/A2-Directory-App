import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadOfficersPage } from './head-officers.page';

const routes: Routes = [
  {
    path: '',
    component: HeadOfficersPage
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeadOfficersPageRoutingModule {}
