import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'propertybinding',
  template: `
  <h2>{{topicName}}
  <br><br>
  <input [id]="myId" type="text" value="vishwas">
  <br><br>
  <input [disabled]="isDisabled" id="{{myId}}" type="text" value="vishwas">

  <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Srinivas">
  `,
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  public topicName="Property Binding";
  public myId="TestId";
  public isDisabled=false;
  constructor() { }

  ngOnInit(): void {
  }

}
