import { async } from '@angular/core/testing';
import { FormData } from './../shared/form-data';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TemplateService } from '../services/template.service';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.sass']
})

export class DynamicFormComponent implements OnInit{

  @Input() formData: FormData[];
  @Output() onFormSubmit = new EventEmitter<any>();
  @Input() form: FormGroup;
  @Output() formChange = new EventEmitter()

  constructor(private tempservice:TemplateService) {
  }
  
  ngOnInit() {
    const formGroup = {};
    this.formData.forEach(formControl => {
      formGroup[formControl.controlName] = new FormControl(formControl.defaultValue,
        [
          formControl.validators ? formControl.validators.required ? Validators.required : Validators.nullValidator : Validators.nullValidator,
          formControl.validators ? formControl.validators.minlength ? Validators.minLength(formControl.validators.minlength) : Validators.nullValidator : Validators.nullValidator,
          formControl.validators ? formControl.validators.maxlength ? Validators.maxLength(formControl.validators.maxlength) : Validators.nullValidator : Validators.nullValidator,
          formControl.validators ? formControl.validators.email ? Validators.email : Validators.nullValidator : Validators.nullValidator
        ]
      );
    });
    this.form = new FormGroup(formGroup);
    console.log(this.form);
    console.log(this.FormThreadData);
    this.tempservice.setThread(this.FormThreadData);
    this.formChange.emit(this.form);
    this.OnChanges();
    // this.form.patchValue({
    //   Email: 'amar@getMaxListeners.com',
    //   Gender: 'male',
    //   Password: "12456",
    //   Username: "amar@gmail.com",
    //   Vehicleyouown : "Yes"
    // })
  }

  OnChanges(): void {
    this.form.valueChanges.subscribe(value=>{
      this.formChange.emit(value);
    })
    this.form.updateValueAndValidity();

  }

  get FormThreadData(){
    let threadData =  {"recentData":this.form.value}
    return threadData; 
  }

  submitForm(form) {
    this.onFormSubmit.emit(form);
  }
}
