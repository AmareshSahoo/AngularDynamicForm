import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {

  @Input() fieldConfig: FormData;
  @Input() form: string;

  public clickAction: string;
  public clickParam: any;

  constructor() { }

  ngOnInit() {
    console.log("Fileld Config,,",this.fieldConfig);
    // this.clickAction = this.fieldConfig['listeners'][0].eventName;
    this.clickAction = this.fieldConfig['clickEvent'].methodName;
    // this.clickParam = this.fieldConfig['listeners'][0].param;

    console.log("clickAction",this.clickAction);
  }
  
  OnSubmitButton(data){
    // alert('HY');
    // console.log("clickParam",data);
  }
}
