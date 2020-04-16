import { Component, OnInit, Input } from '@angular/core';
import { RegisterDynamicFormComponent } from 'src/app/register-dynamic-form/register-dynamic-form.component';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.sass']
})
export class SelectDropdownComponent implements OnInit {

  @Input() fieldConfig: FormData[];
  @Input() form: string;
  constructor(public comp: RegisterDynamicFormComponent) { }

  ngOnInit() {
  }

  Click(fieldConfig){
    console.log(fieldConfig);
  }
}
