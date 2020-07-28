import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {InitialSliderService} from './services/initial-slider.service';
import {TabsService} from './services/tabs.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [TabsService]
  },
  {
    path: 'initial-slider',
    loadChildren: () => import('./initial-slider/initial-slider.module').then( m => m.InitialSliderPageModule),
    canActivate : [InitialSliderService]
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
