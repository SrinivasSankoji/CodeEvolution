import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'templatereference',
  template: `
  <div>
  <h2> Wecome {{name}}</h2>

  <input #userInput type="text">
  <button (click)="logMessage(userInput.value)">Log</button> {{input}}

  `,
  styleUrls: ['./templatereference.component.css']
})
export class TemplatereferenceComponent implements OnInit {

  public name="Template Reference Variable"
  public input="";
  constructor() { }

  ngOnInit(): void {
  }

  public logMessage(value)
  {
    this.input=value;
  }
}
