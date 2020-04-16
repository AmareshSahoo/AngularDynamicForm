import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDashboardRoutingModule } from './customer-dashboard-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';



@NgModule({

  declarations: [
    CustomerListComponent,
  ],
  imports: [
    CommonModule,
    CustomerDashboardRoutingModule
  ]
})
export class CustomerDashboardModule {
  constructor(){
    console.log('Customer Module Loaded...');
  }
 }
