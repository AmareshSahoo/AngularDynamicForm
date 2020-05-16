import { element } from 'protractor';

import { Component, OnInit, ElementRef, AfterViewInit, Input } from '@angular/core';
import { RegisterFormData } from '../shared/registerData';
import { FormGroup } from '@angular/forms';
import { DynamicFormComponent } from '../Dynamic-Form/Dynamic-Form.component';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-register-dynamic-form',
  templateUrl: './register-dynamic-form.component.html',
  styleUrls: ['./register-dynamic-form.component.sass']
})
export class RegisterDynamicFormComponent implements OnInit, AfterViewInit {

  constructor(private elRef: ElementRef, private tempservice: TemplateService) {

  }

  mThread: any[];
  regdFormData = RegisterFormData;
  ngOnInit() {
    console.log('regdFormData.....', this.regdFormData);

    setTimeout(() => {
      this.tempservice.getThread().subscribe(res => {
        this.mThread = res;
        console.log("Mst", this.mThread);
      });
    });

    this.tempservice.getSubject().subscribe(res => {
      this.regdFormData = res;
    })
  }

  onFormSubmit(event) {
    console.log('onFormSubmit.....', event);
  }

  OnformChange(event) {
    this.mThread = event;
    console.log('OnformChange.....', event);
  }

  DynamicallyGenerateMethod() {
    this.regdFormData.forEach((element, index) => {
      if (element['click'] && element['click']['methodName'] && element['controlType'] !== "button") {
        console.log("ngAfterViewInit", element, index);
        setTimeout(() => {
          let ctrl = element.controlName;
          let method = element['click']['methodName'];
          console.log("method", method);
          if ((method! == "" || method !== undefined || method !== null) && (ctrl! == "" || ctrl !== undefined || ctrl !== null)) {
            this.elRef.nativeElement.querySelector(`#${ctrl}`).addEventListener('change',
              this[method].bind(this));
          }
        });
      } else {
        console.log("ngAfterViewInit");
      }
    });
  }

  ngAfterViewInit() {
    this.DynamicallyGenerateMethod();

    let ctl = this.regdFormData[1].controlName;
    this.elRef.nativeElement.querySelector(`#${ctl}`).addEventListener('change',
      this.onChange.bind(this));
  }
  onClickUsername() {
    alert("Hy");
  }
  onClickPass() {
    alert("Hy");
  }
  onClickGender() {
    alert("Hy");
  }
  onChange() {
    console.log("Good To Go ");
    // this.tempservice.changeUI(this.regdFormData,["Username","Password"],"disabled",true);
    // this.tempservice.changeUI(this.regdFormData,["Username","Password"],"hidden",true);
    this.tempservice.changeUI(this.regdFormData, ["Username"], "defaultValue", "amar");
    console.log(this.regdFormData);

  }
}
