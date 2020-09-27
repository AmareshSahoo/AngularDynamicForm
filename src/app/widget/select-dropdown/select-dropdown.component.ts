import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.sass']
})
export class SelectDropdownComponent implements OnInit {

  @Input() fieldConfig: FormData[];
  @Input() form: string;
  constructor() { }

  ngOnInit() {
  }
}
