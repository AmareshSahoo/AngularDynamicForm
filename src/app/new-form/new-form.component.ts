import { Component, OnInit, ElementRef } from '@angular/core';
import { RegisterFormData } from "../shared/registerData";
import { FormGroup } from "@angular/forms";
import { DynamicFormComponent } from "../Dynamic-Form/Dynamic-Form.component";
import { TemplateService } from "../services/template.service";
import { MockForm } from '../shared/mock-data';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.sass']
})
export class NewFormComponent implements OnInit {

  constructor(
    private elRef: ElementRef,
    private tempservice: TemplateService
  ) { }

  mThread: any[];
  regdFormData = MockForm;
  form: FormGroup;
  ngOnInit() {
    console.log("regdFormData.....", this.regdFormData);

    setTimeout(() => {
      this.tempservice.getThread().subscribe((res) => {
        this.mThread = res;
        console.log("Mst", this.mThread);
        this.getForm();
      });
    });

    this.tempservice.DynamicallyGenerateMethod(this.regdFormData).subscribe(
      (res: any[]) => {
        console.log("DynamicallyGenerateMethod===", res);
        for (let index in res) {
          console.log("index", index);
          this.elRef.nativeElement
            .querySelector(`#${res[index]["ctrl"]}`)
            .addEventListener("change", this[res[index]["method"]].bind(this));
        }
      }
    );

    this.tempservice.getSubject().subscribe((res: any[]) => {
      this.regdFormData = res;
    });

    let data = '<root>Hello xml2js!</root>'
    this.tempservice.parse(data).subscribe((res: any[]) => {
      console.log("parse===", res);
    });
  }

  OnformChange(event) {
    this.mThread = event;
    console.log("OnformChange.....", event);
  }

  getForm() {
    this.tempservice.getForm().subscribe((res) => {
      console.log("res Form==", res);
      this.form = res;
    });
  }



  onFormSubmit(event) {
    console.log("onFormSubmit.....", event.value);
  }
}
