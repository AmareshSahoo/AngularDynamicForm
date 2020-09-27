import { ElementRef } from "@angular/core";
import { Observable } from "rxjs";

export class GenerateMethods {
  constructor() {}
  DynamicallyGenerateMethod(form) {
    const GenerateMethod = new Observable((observer) => {
      let CtrlArray: any[] = [];
      form.forEach((element, index) => {
        if (
          element["click"] &&
          element["click"]["methodName"] &&
          element["controlType"] !== "button"
        ) {
          console.log("ngAfterViewInit", element, index);
          setTimeout(() => {
            let ctrl = element['controlName'];
            let method = element["click"]["methodName"];
            console.log("method", method);
            if (
              (method! == "" || method !== undefined || method !== null) &&
              (ctrl! == "" || ctrl !== undefined || ctrl !== null)
            ) {
              CtrlArray.push({ ctrl: ctrl, method: method });
              //  this.elRef.nativeElement.querySelector(`#${ctrl}`).addEventListener('change',
              //     this[method].bind(this));
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
}
