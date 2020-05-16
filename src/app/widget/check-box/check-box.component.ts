import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.sass']
})
export class CheckBoxComponent implements OnInit {

  @Input() fieldConfig: FormData[];
  @Input() form: string;
  constructor() { }

  ngOnInit() {
  }
}
