import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultipleDetailsPage } from './multiple-details.page';

const routes: Routes = [
  {
    path: '',
    component: MultipleDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultipleDetailsPageRoutingModule {}
