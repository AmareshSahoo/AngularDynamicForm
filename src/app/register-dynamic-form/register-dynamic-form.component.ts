import { FormData } from './../shared/form-data';
import { MockForm } from './../shared/mock-data';
import { Component, OnInit } from '@angular/core';
import { RegisterFormData } from '../shared/registerData';
import { RegisterDataService } from '../shared/services/register-data.service';

@Component({
  selector: 'app-register-dynamic-form',
  templateUrl: './register-dynamic-form.component.html',
  styleUrls: ['./register-dynamic-form.component.sass']
})
export class RegisterDynamicFormComponent implements OnInit {

  constructor() { }

  regdFormData= RegisterFormData;
  ngOnInit() {
    console.log('regdFormData.....',this.regdFormData);
  }

  onFormSubmit(event){
    console.log('onFormSubmit.....',event);
  }

  OnSubmitButton(data){
    alert('HY');
    console.log("clickParam",data);
  }

}
