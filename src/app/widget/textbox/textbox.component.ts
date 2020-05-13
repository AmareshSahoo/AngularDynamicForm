import { FormData } from './../../shared/form-data';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.sass']
})
export class TextboxComponent implements OnInit {


  @Input() fieldConfig: FormData[];
  @Input() form: string;
  @Output() onClickEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {

    console.log("fieldConfig==",this.fieldConfig);
   
  }

  click(){
    if(this.fieldConfig['clickEvent'] && this.fieldConfig['clickEvent']['methodName']){
      console.log("true");
      this.onClickEvent.emit(this.form);
    }else{
      console.log("false");
    }
  }
}
