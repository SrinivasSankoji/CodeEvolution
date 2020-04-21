import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { User } from 'src/app/user';
import { UserService } from 'src/app/crudservice/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit 
{

  public user:User;
  constructor(private _userService:UserService,
    private _router:Router) { }

  ngOnInit(): void {
    this.user=this._userService.getter();
  }

  public processUser()
  {
    if(this.user.id==undefined)
    {
      this._userService.createeUser(this.user).subscribe((user) =>{
        console.log(user);
        this._router.navigate(['/']);
      },(error) =>{
        console.log(error);
      })
    }
    else{
      this._userService.updateUser(this.user).subscribe((user) =>{
        console.log(user);
        this._router.navigate(['/']);
      },(error) =>{
        console.log(error);
      })
    }
  }

}

