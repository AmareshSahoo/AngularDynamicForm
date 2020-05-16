import { element } from 'protractor';

import { of, Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() { }

  masterThread: any[];
  FData$ = new Subject<any>();

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

  getSubject(): Observable<any> {
    return this.FData$.asObservable();
  }

  changeUI(formData, control, prop, val) {
    let i;
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
  }

}
