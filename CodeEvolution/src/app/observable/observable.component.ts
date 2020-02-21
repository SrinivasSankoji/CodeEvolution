import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'observable',
  template:`
    <div>
    <h2> Observable </h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
    </div>
  `,
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  public employees=[];

  constructor(private employeeservice:EmployeeService) { }

  ngOnInit(): void {
    this.employeeservice.getEmployees().subscribe(data =>this.employees=data);
  }

}
