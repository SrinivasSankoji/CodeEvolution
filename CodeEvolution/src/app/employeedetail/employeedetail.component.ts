import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employeedetail',
  template: `
  <div>
    <h2>{{name}}</h2>
    <ul *ngFor="let employee of employees">
    <li>{{employee.salary}}</li>
    </ul>
  </div>
  `,
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

  public name="Employee Detail";

  public employees: any =[];

  constructor(private _employeeservice: EmployeeService) { }

  ngOnInit() {
    this.employees=this._employeeservice.getEmployees();
  }

  /**public employees =[
    {"id":22,"name":"srinivas","salary":22000.00},
    {"id":27,"name":"Nandini","salary":27000.00},
    {"id":23,"name":"Bhaumik","salary":23000.00}
  ];**/

}
