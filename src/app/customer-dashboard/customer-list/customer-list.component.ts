import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.sass']
})
export class CustomerListComponent implements OnInit {

  constructor(private service: MyserviceService) { }

  AllData:any[]; 

  ngOnInit() {
    this.FetchAllData();
  }

  

  FetchAllData(){
    this.service.getAllData().subscribe((data:any)=>{
      this.AllData = data ;
      console.log(data);
    })
  }
}
