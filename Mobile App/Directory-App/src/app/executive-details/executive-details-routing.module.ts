import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExecutiveDetailsPage } from './executive-details.page';

const routes: Routes = [
    {
        path: '',
        component: ExecutiveDetailsPage
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ExecutiveDetailsPageRoutingModule {}