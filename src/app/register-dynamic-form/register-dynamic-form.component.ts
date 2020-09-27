
import { Component, OnInit, ElementRef, AfterViewInit, Input } from "@angular/core";
import { RegisterFormData } from "../shared/registerData";
import { FormGroup } from "@angular/forms";
import { DynamicFormComponent } from "../Dynamic-Form/Dynamic-Form.component";
import { TemplateService } from "../services/template.service";

@Component({
  selector: "app-register-dynamic-form",
  templateUrl: "./register-dynamic-form.component.html",
  styleUrls: ["./register-dynamic-form.component.sass"],
})
export class RegisterDynamicFormComponent implements OnInit, AfterViewInit {
  constructor(
    private elRef: ElementRef,
    private tempservice: TemplateService
  ) { }

  mThread: any[];
  regdFormData = RegisterFormData;
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

  // DynamicallyGenerateMethod() {
  //   this.regdFormData.forEach((element, index) => {
  //     if (element['click'] && element['click']['methodName'] && element['controlType'] !== "button") {
  //       console.log("ngAfterViewInit", element, index);
  //       setTimeout(() => {
  //         let ctrl = element['controlName'];
  //         let method = element['click']['methodName'];
  //         console.log("method", method);
  //         if ((method! == "" || method !== undefined || method !== null) && (ctrl! == "" || ctrl !== undefined || ctrl !== null)) {
  //           this.elRef.nativeElement.querySelector(`#${ctrl}`).addEventListener('change',
  //             this[method].bind(this));
  //         }
  //       });
  //     } else {
  //       console.log("ngAfterViewInit");
  //     }
  //   });
  // }

  ngAfterViewInit() {
    // this.DynamicallyGenerateMethod();
    let ctl = this.regdFormData[1]['controlName'];
    this.elRef.nativeElement.querySelector(`#${ctl}`).addEventListener('change',
      this.onChange.bind(this));
  }

  onClickUsername() {
    console.log("onClickUsername");
  }
  onClickPass() {
    console.log("onClickPass-====");
  }
  onClickGender() {
    console.log("onClickGender-====");
  }

  onChange() {
    console.log("Good To Go ");
    this.tempservice.changeUI(
      this.regdFormData,
      ["Username", "Password"],
      "disabled",
      true
    );
    // this.tempservice.changeUI(this.regdFormData,["Username","Password"],"hidden",true);
    this.tempservice.changeUI(
      this.regdFormData,
      ["Username"],
      "defaultValue",
      "amar"
    );
    this.tempservice.changeUI(
      this.regdFormData,
      ["Password"],
      "disabled",
      true
    );
    this.tempservice.changeUI(
      this.regdFormData,
      ["Password"],
      "required",
      true,
      "isValidation"
    );
    this.tempservice.changeUI(
      this.regdFormData,
      ["Password"],
      "maxlength",
      10,
      "isValidation"
    );
    console.log(this.regdFormData);
  }
  onFormSubmit(event) {
    console.log("onFormSubmit.....", event.value);
  }
}
