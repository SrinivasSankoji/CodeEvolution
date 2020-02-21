import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService 
{
  private url="/assets/data/employee.json";

  constructor(private http:HttpClient) { }

  /**getEmployees()
  {
    return [
        {"id":22,"name":"srinivas","salary":22000.00},
        {"id":27,"name":"Nandini","salary":27000.00},
        {"id":23,"name":"Bhaumik","salary":23000.00}
      ];
  }**/

  getEmployees():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this.url);
  }
}
