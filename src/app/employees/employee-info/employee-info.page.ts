import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.module';
import { EmployeesService } from './../employees.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.page.html',
  styleUrls: ['./employee-info.page.scss'],
})
export class EmployeeInfoPage implements OnInit {
  employeeInfoDetail: Employee;

  constructor(private activateRoute: ActivatedRoute , private employeeService: EmployeesService , private router: Router) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('employeeid')) {
        return;
      }
      const empId = paramMap.get('employeeid');
      this.employeeInfoDetail = this.employeeService.getEmployeeInfo(empId);
    });
  }
  deleteEmployee() {
    this.employeeService.deleteEmployeeInfo(this.employeeInfoDetail.id);
    this.router.navigate(['/employees']);
  }

}
