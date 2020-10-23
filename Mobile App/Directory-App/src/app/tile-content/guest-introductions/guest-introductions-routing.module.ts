import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestIntroductionsPage } from './guest-introductions.page';
import {IntroComponent} from './intro/intro.component';

const routes: Routes = [
  {
    path: '',
    component: GuestIntroductionsPage
  },
  {
    path: 'intro',
    component: IntroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestIntroductionsPageRoutingModule {}
