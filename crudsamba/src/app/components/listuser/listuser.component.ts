import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/crudservice/user.service';
import { User } from 'src/app/user';
import {Router} from '@angular/router';

@Component({
  selector: 'listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit 
{
  public users:User[];
  //public user:User;
  constructor(private userService:UserService,
    private _router:Router) { }

  ngOnInit(): void 
  {
    this.userService.getUsers().subscribe((users)=>{
      console.log(users);
      this.users=users;
    },(error)=>{
      console.log(error);
    });
  }

  public deleteUser(user)
  {
      this.userService.deleteUser(user.id).subscribe((data) =>{
        this.users.splice(this.users.indexOf(user),1);
      },(error) =>{
        console.log(error);
      })
  }

  public updateUser(user)
  {
     this.userService.setter(user);
     this._router.navigate(['/op']);
  }
   
  public createUser()
  {
    let user=new User();
    this.userService.setter(user);
     this._router.navigate(['/op']);
  }
}
