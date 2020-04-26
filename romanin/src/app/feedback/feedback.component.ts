import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit 
{

  url ="http://localhost:1234/api/feedback";
  model:FeedbackViewModel ={
    name:'',
    email:'',
    feedback:''
  };
  constructor(private _http:HttpClient) { }

  ngOnInit() {
  }

  submitFeedback():void
  {
    this._http.post(this.url,this.model).subscribe(
      res => {
        location.reload();
      },
      error => {
        alert("Error Occured");
      }
    );
    console.log(this.model.name);
  }

}

export interface FeedbackViewModel
{
  name:string,
  email:string,
  feedback:string
}
