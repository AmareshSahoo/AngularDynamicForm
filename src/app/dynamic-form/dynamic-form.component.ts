import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormData } from '../shared/form-data';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.sass']
})
export class DynamicFormComponent implements OnInit {

  @Input() formData: FormData[];
  @Output() onFormSubmit = new EventEmitter<any>();
  @Output() Evnt = new EventEmitter<any>();
  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    const formGroup = {};
    this.formData.forEach(formControl => {
      formGroup[formControl.controlName] = new FormControl(formControl.defaultValue,
        [
          formControl.validators ? formControl.validators.required ? Validators.required : Validators.nullValidator : Validators.nullValidator,
          formControl.validators ? formControl.validators.minlength ? Validators.minLength(formControl.validators.minlength) : Validators.nullValidator : Validators.nullValidator,
          formControl.validators ? formControl.validators.maxlength ? Validators.maxLength(formControl.validators.maxlength) : Validators.nullValidator : Validators.nullValidator,
          formControl.validators ? formControl.validators.email ? Validators.email : Validators.nullValidator : Validators.nullValidator,
        ]
      );
    });
    this.form = new FormGroup(formGroup);
  }

  submitForm(form) {
    this.onFormSubmit.emit(form);
  }

  onClickEvent(form){
    this.Evnt.emit(form);
  }

}
