import { async } from '@angular/core/testing';
import { FormData } from './../shared/form-data';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TemplateService } from '../services/template.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.sass']
})

export class DynamicFormComponent implements OnInit {

  @Input() formData: FormData[];
  @Output() onFormSubmit = new EventEmitter<any>();
  @Input() form: FormGroup;
  @Output() formChange = new EventEmitter();

  sub: Subscription;

  constructor(private tempservice: TemplateService) {
  }

  ngOnInit() {
    this.generateFormControls();
    
    this.tempservice.setForm(this.form);
    console.log("FormThreadData==", this.FormThreadData);

    this.tempservice.setThread(this.FormThreadData);
    this.formChange.emit(this.form);
    this.OnChanges();

    this.sub = this.tempservice.getSubject().subscribe((res: any[]) => {
      this.formData = res;
      this.generateFormControls();
      this.OnChanges();
    });
  }

  generateFormControls(){
    let formGroup = {};
    this.formData.forEach(formControl => {
      if (formControl['controlName'] && formControl['controlType'] !== "button") {
        formGroup[formControl.controlName] = new FormControl(formControl.defaultValue,
          [
            formControl.validators ? formControl.validators.required ? Validators.required : Validators.nullValidator : Validators.nullValidator,
            formControl.validators ? formControl.validators.minlength ? Validators.minLength(formControl.validators.minlength) : Validators.nullValidator : Validators.nullValidator,
            formControl.validators ? formControl.validators.maxlength ? Validators.maxLength(formControl.validators.maxlength) : Validators.nullValidator : Validators.nullValidator,
            formControl.validators ? formControl.validators.email ? Validators.email : Validators.nullValidator : Validators.nullValidator
          ]
        );
      }
    });
    this.form = new FormGroup(formGroup);
  }
  
  OnChanges(): void {
    this.form.valueChanges.subscribe(value => {
      this.formChange.emit(value);
      this.formData.filter(formControl=>{
        if (formControl['controlName'] && formControl['controlType'] !== "button") {
          if(formControl['controlName'] in value){
            // console.log(true,value);
            formControl['defaultValue'] = value[formControl['controlName']];
            // console.log(this.formData);
          }else{
            console.log(false,value)
          }
          
        }
      })
    })
    this.form.updateValueAndValidity();

  }

  get FormThreadData() {
    let threadData = { "recentData": this.form.value }
    return threadData;
  }

  submitForm(form) {
    this.onFormSubmit.emit(form);
  }
}
