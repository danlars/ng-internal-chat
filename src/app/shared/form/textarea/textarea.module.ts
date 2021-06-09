import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaComponent } from './textarea.component';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TextareaComponent
  ],
  imports: [
    CommonModule,
    FroalaEditorModule.forRoot(),
    FormsModule
  ],
  exports: [
    TextareaComponent
  ]
})
export class TextareaModule { }
