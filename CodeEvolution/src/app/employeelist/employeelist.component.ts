import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employeelist',
  template:`
    <div>
    <h2>{{name}}</h2>
    <ul *ngFor ="let employee of employees" >
      <li>{{employee.name}}</li>
    </ul>
    </div>
  `,
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public name="Employee List";

  public employees: any= [];

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() 
  {
    this.employees =this._employeeService.getEmployees();
    console.log(this.employees);
  }

  /**public employees=[

    {"id":22,"name":"srinivas","salary":22000.00},
    {"id":27,"name":"Nandini","salary":27000.00},
    {"id":23,"name":"Bhaumik","salary":23000.00}
  ]**/

}
