import { FormData } from './../../shared/form-data';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.sass']
})
export class TextboxComponent implements OnInit {


  @Input() fieldConfig: FormData[];
  @Input() form: string;

  constructor() { }

  ngOnInit() {

    console.log(this.fieldConfig);
   
  }

}
