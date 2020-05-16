import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormComponent } from './Dynamic-Form/Dynamic-Form.component';


import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterDynamicFormComponent } from './register-dynamic-form/register-dynamic-form.component';
import { WidgetModule } from './widget/widget.module';
import { TextboxComponent } from './widget/textbox/textbox.component';
import { SelectDropdownComponent } from './widget/select-dropdown/select-dropdown.component';
import { CheckBoxComponent } from './widget/check-box/check-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ButtonComponent } from './widget/button/button.component';
import { TemplateService } from './services/template.service';

@NgModule({
   declarations: [
      AppComponent,
      DynamicFormComponent,
      RegisterDynamicFormComponent,
      TextboxComponent,
      SelectDropdownComponent,
      CheckBoxComponent,
      ButtonComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule, 
      ReactiveFormsModule, BrowserAnimationsModule,
      // WidgetModule
      MaterialModule
   ],
   providers: [
      TemplateService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
