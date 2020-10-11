import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {InitialSliderService} from './services/initial-slider.service';
import {TabsService} from './services/tabs.service';
import {AuthenticationService} from './services/authentication.service';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [TabsService]
  },
  {
    path: '',
    loadChildren: () => import('./initial-slider/initial-slider.module').then( m => m.InitialSliderPageModule),
    canActivate : [InitialSliderService]
  },
  {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then( m => m.AuthenticationPageModule),
    canActivate: [AuthenticationService]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
