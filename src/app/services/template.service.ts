import { of, Subject, Observable } from "rxjs";
import { Injectable, ElementRef } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { parseString} from "xml2js";


@Injectable({
  providedIn: "root",
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
  }

  getThread() {
    console.log("masterThread2", this.masterThread);
    return of(this.masterThread);
  }

  setFormData() {
    let data = {
      Email: "amar@getMaxListeners.com",
      Gender: "male",
      Password: "12456",
      Username: "amar@gmail.com",
      Vehicleyouown: "Yes",
    };
    return of(data);
  }

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

  changeUI(formData, control, prop, val, isValidation?, form?) {
    let i;
    if (isValidation !== "isValidation") {
      if (formData && formData.length > 0) {
        if (control && control.length > 0) {
          if (prop) {
            for (let ctrl of control) {
              formData.forEach((el, index) => {
                if (el['controlName'] == ctrl) {
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
                if (el['controlName'] == ctrl) {
                  i = index;
                  console.log("el", el);
                }
              });
              formData[i]["validators"][prop] = val;
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

  DynamicallyGenerateMethod(formData) {
    const GenerateMethod = new Observable((observer) => {
      let CtrlArray: any[] = [];
      formData.forEach((element, index) => {
        if (element["click"] &&
          element["click"]["methodName"] &&
          element["controlType"] !== "button"
        ) {
          setTimeout(() => {
            let ctrl = element['controlName'];
            let method = element["click"]["methodName"];
            console.log("method", method);
            if (
              (method! == "" || method !== undefined || method !== null) &&
              (ctrl! == "" || ctrl !== undefined || ctrl !== null)
            ) {
              CtrlArray.push({ ctrl, method });
            } else {
              console.log("No method found");
            }
          });
        } else {
          console.log("ngAfterViewInit");
        }
      });
      setTimeout(() => {
        observer.next(CtrlArray);
        observer.complete();
      });
    });
    return GenerateMethod;
  }

  parse(string: string): Observable<object> {

    return new Observable<object>(observer => {
      parseString(string, ((err, result) => {
          observer.next(result);
          observer.complete();
      }));
  });
  }
}



