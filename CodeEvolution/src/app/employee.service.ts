import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService 
{
  constructor() { }

  getEmployees()
  {
    return [
        {"id":22,"name":"srinivas","salary":22000.00},
        {"id":27,"name":"Nandini","salary":27000.00},
        {"id":23,"name":"Bhaumik","salary":23000.00}
      ];
  }
}
