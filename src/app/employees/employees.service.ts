import { Injectable } from '@angular/core';
import { Employee } from './employee.module';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employee: Employee[] = [
    {
      id: '1' ,
      name: 'Andrew' ,
      age : 33 ,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      address:['Iraq','Kirkuk' , '423154']
    } ,
    {
      id: '2' ,
      name: 'Mina' ,
      age : 34 ,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      address:['Helnet','elzeitoumn' , '4234']
    } ,
    {
      id: '3' ,
      name: 'John' ,
      age : 35 ,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      address:['Elzero','web' , '424']
    } ,
    {
      id: '4' ,
      name: 'Mario' ,
      age : 36 ,
      avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
      address:['Iron','Kid' , '4154']
    }
  ];
  constructor() { }

  getAllEmployees() {
    console.log('5');
    return [...this.employee];
  };

  getEmployeeInfo(employeeid) {
    return {...this.employee.find(emp => emp.id === employeeid) };
  }

  deleteEmployeeInfo(employeeid: string) {
    alert(employeeid);
    this.employee = this.employee.filter(emp => emp.id !== employeeid);
  }
}
