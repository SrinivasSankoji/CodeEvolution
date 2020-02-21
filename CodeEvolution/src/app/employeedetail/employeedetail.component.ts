import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  public employees =[
    {"id":22,"name":"srinivas","salary":22000.00},
    {"id":27,"name":"Nandini","salary":27000.00},
    {"id":23,"name":"Bhaumik","salary":23000.00}
  ];

}
