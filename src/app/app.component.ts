import { FormData } from './shared/form-data';
import { Component } from '@angular/core';
import { MockForm } from './shared/mock-data';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'demoApp';
  MockData = MockForm;

  JsonData = [];

  constructor(private http: HttpClient) {
    this.http.get("assets/mockData.json").subscribe((data:any) => {    
      this.JsonData = data.FormData;
    })
    console.log('JsonData',this.JsonData);
    console.log('MockData',this.MockData);     
  }
}
