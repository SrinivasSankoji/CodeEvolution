import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'twowaybinding',
  template: `
  <div>
  <h2>Two Way Binding</h2>

  <input [(ngModel)]="name" type="text">  {{name}}
  
  <div>

  `,
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public name="";

}
