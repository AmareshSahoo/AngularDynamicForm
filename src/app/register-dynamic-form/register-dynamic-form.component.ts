import { element } from 'protractor';
import { FormData } from './../shared/form-data';
import { MockForm } from './../shared/mock-data';
import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { RegisterFormData } from '../shared/registerData';
import { RegisterDataService } from '../shared/services/register-data.service';

@Component({
  selector: 'app-register-dynamic-form',
  templateUrl: './register-dynamic-form.component.html',
  styleUrls: ['./register-dynamic-form.component.sass']
})
export class RegisterDynamicFormComponent implements OnInit , AfterViewInit{

  constructor(private elRef:ElementRef) { 
  }

  regdFormData= RegisterFormData;
  ngOnInit() {
    console.log('regdFormData.....',this.regdFormData);
  }

  onFormSubmit(event){
    console.log('onFormSubmit.....',event.value);
  }

  onEvent(event){
    console.log('event.....',event.value);
    this.regdFormData[2]['disabled'] = true;
    this.regdFormData[5]['options'] = [{optionName: "NA", value: "NA"}];
  }

  ngAfterViewInit(){
    this.elRef.nativeElement.querySelector('#Email').addEventListener('click', 
    this.onClick.bind(this));

    this.elRef.nativeElement.querySelector('#Password').addEventListener('change', 
    this.onClickPassword.bind(this));
  }
  onClick(){
    alert("Hy");
  }
  onClickPassword(){
    alert("By");
  }

}
