import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormComponent } from './Dynamic-Form/Dynamic-Form.component';
import { DynamicFieldDirective } from './dynamic-form/dynamic-field.directive';


import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TextboxComponent } from './widget/textbox/textbox.component';
import { SelectDropdownComponent } from './widget/select-dropdown/select-dropdown.component';
import { CheckBoxComponent } from './widget/check-box/check-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ButtonComponent } from './widget/button/button.component';
import { TemplateService } from './services/template.service';
import { RegisterDynamicFormComponent } from './register-dynamic-form/register-dynamic-form.component';
import { NewFormComponent } from './new-form/new-form.component';

@NgModule({
   declarations: [
      AppComponent,
      DynamicFormComponent,
      DynamicFieldDirective,
      RegisterDynamicFormComponent,
      TextboxComponent,
      SelectDropdownComponent,
      CheckBoxComponent,
      ButtonComponent,
      NewFormComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule, BrowserAnimationsModule,
      MaterialModule
   ],
   providers: [
      TemplateService
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
    TextboxComponent,
    SelectDropdownComponent,
    CheckBoxComponent,
    ButtonComponent,
  ]
})
export class AppModule { }
