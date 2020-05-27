import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employeelist',
  templateUrl:'./employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public employees: any= [];

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() 
  {
     this.employees =this._employeeService.getEmployees();
  }

  public getEmployees()
  {
    return this.employees;
  }
}
