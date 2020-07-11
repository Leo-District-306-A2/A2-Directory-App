import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'executive',
        loadChildren: () => import('../executive/executive.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'clubs',
        loadChildren: () => import('../clubs/clubs.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('../side-menu/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
      },
      {
        path: 'our-team',
        loadChildren: () => import('../side-menu/our-team/our-team.module').then( m => m.OurTeamPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
