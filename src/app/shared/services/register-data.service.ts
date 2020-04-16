import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { RegisterFormData } from '../registerData';

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

  constructor() { }

  getRegdFormData(){
    return of(RegisterFormData.sort((a, b) => a.order - b.order));
  }
}
