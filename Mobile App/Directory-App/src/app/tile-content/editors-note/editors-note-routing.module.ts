import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditorsNotePage } from './editors-note.page';

const routes: Routes = [
  {
    path: '',
    component: EditorsNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorsNotePageRoutingModule {}
