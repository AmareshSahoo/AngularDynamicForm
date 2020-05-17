import { element } from 'protractor';

import { of, Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() { }

  masterThread: any[];
  FData$ = new Subject<FormData[]>();
  formCopy$ = new Subject<FormGroup>();
  form: FormGroup;

  setThread(formData) {
    this.masterThread = formData;
    console.log("masterThread1", this.masterThread);
  };

  getThread() {
    console.log("masterThread2", this.masterThread);
    return of(this.masterThread);
  };

  setFormData() {
    let data = {
      Email: 'amar@getMaxListeners.com',
      Gender: 'male',
      Password: "12456",
      Username: "amar@gmail.com",
      Vehicleyouown: "Yes"
    }
    return of(data);
  };

  getSubject(): Observable<FormData[]> {
    return this.FData$.asObservable();
  }

  setForm(form) {
    console.log("form", form);
    this.form = form;
    this.formCopy$.next(form);
  }

  getForm() {
    return of(this.form);
  }

  changeUI(formData, control, prop, val,isValidation?, form?) {
    let i;
    if (isValidation !== "isValidation") {
      if (formData && formData.length > 0) {
        if (control && control.length > 0) {
          if (prop) {
            for (let ctrl of control) {
              formData.forEach((el, index) => {
                if (el.controlName == ctrl) {
                  i = index;
                }
              });
              formData[i][prop] = val;
            }
            const dataChanges = this.FData$.next(formData);
            return dataChanges;
          } else {
            console.log("changeUI Prop Not Found ===");
          }
        } else {
          console.log("changeUI Control Not Found ===");
        }
      } else {
        console.log("changeUI FormData Not Found ===");
      }
    } else {
      console.log("required", prop);
      if (formData && formData.length > 0) {
        if (control && control.length > 0) {
          if (prop) {
            for (let ctrl of control) {
              formData.forEach((el, index) => {
                if (el.controlName == ctrl) {
                  i = index;
                  console.log("el", el);
                }
              });
              formData[i]['validators'][prop] = val;
            }
            const dataChanges = this.FData$.next(formData);
            return dataChanges;
          } else {
            console.log("changeUI Prop Not Found ===");
          }
        } else {
          console.log("changeUI Control Not Found ===");
        }
      } else {
        console.log("changeUI Error");
      }

    }
  }
}
