import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  template: `
  // Interpolation
  <h2>
  Welcome {{name}}
  </h2>   
  // Number  Evaluation
  <h2>{{2+2}}</h2>   
  // String Evaluation
  <h2>
  {{"Welcome " + name}}
  </h2>  
  //Java Script Method  
  <h2>{{name.length}}</h2>   

  //Java Script Method  
  <h2>{{name.toUpperCase()}}</h2>  

  //User Defined Method  
  <h2>{{greetUser()}}</h2>  

  //Global Variable
  <h2>{{siteUrl}}</h2>

  `,
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public name ="Interpolation by Srinivas";
  public siteUrl=window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  greetUser()
  {
    return "Hello " +this.name;
  }

}
