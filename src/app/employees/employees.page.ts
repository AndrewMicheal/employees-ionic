import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.module';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {
  employee: Employee[];

  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
    this.employee = this.employeeService.getAllEmployees();
  }

}
