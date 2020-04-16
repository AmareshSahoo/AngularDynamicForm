import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDashboardRoutingModule } from './employee-dashboard-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';


@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,
    EmployeeDashboardRoutingModule
  ]
})
export class EmployeeDashboardModule { }
