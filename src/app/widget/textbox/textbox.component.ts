import { FormData } from './../../shared/form-data';
import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterDynamicFormComponent } from 'src/app/register-dynamic-form/register-dynamic-form.component';


@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.sass']
})
export class TextboxComponent implements OnInit {


  @Input() fieldConfig: FormData[];
  @Input() form: string;
  constructor(private regd: RegisterDynamicFormComponent, private elRef: ElementRef) { }

  ngOnInit() {
    this.fieldConfig['controlName']
    console.log("fieldConfig==", this.fieldConfig);
  }
  click(event) {
    const ctrl = this.fieldConfig['controlName'];
    // console.log(this.elRef.nativeElement.querySelector(ctrl));

    // var x = document.getElementsByName("Vehicleyouown");
    // document.getElementById(ctrl).addEventListener('click', 
    // this.regd.onChangeVehicle.bind(this));
  }
}
