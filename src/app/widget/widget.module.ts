import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetRoutingModule } from './widget-routing.module';
import { TextboxComponent } from './textbox/textbox.component';


@NgModule({
  declarations: [
    TextboxComponent
  ],
  imports: [
    CommonModule,
    WidgetRoutingModule
  ]
})
export class WidgetModule { }
