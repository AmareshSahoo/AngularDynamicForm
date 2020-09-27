import { FormData } from './../../shared/form-data';
import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.sass']
})
export class TextboxComponent implements OnInit {


  @Input() fieldConfig: FormData[];
  @Input() form: string;
  constructor( private elRef: ElementRef) { }

  ngOnInit() {
  }
}
