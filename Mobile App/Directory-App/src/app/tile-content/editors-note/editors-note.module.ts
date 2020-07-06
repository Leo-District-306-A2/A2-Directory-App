import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditorsNotePageRoutingModule } from './editors-note-routing.module';

import { EditorsNotePage } from './editors-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditorsNotePageRoutingModule
  ],
  declarations: [EditorsNotePage]
})
export class EditorsNotePageModule {}
