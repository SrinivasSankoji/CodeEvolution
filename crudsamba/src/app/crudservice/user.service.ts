import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';

 const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //private baseURL:string='http://localhost:1234/api';
  private baseURL:string='/api';
  public user:User;
 
  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>
  {
    return this.http.get<User[]>(this.baseURL+'/users')
  }

  getUser(id:Number):Observable<User[]>
  {
    return this.http.get<User[]>(this.baseURL+'/user/'+id)
  }

  deleteUser(id:Number)
  {
    return this.http.delete(this.baseURL+'/user/'+id)
  }

  createeUser(user)
  {
    return this.http.post<User>(this.baseURL+'/user/',user);
  }

  updateUser(user:any)
  {
    return this.http.put<User>(this.baseURL+'/user/', user);
  }

  setter(user:User)
  {
    this.user=user;
  }

  getter()
  {
    return this.user;
  }

}
