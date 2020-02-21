import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eventbinding',
  template: `
    <h2>
    Welcome {{eventbinding}}
    </h2>
    <br>
    <button (click)="onclick()">Greet</button>  {{name}}
    <br>
    <br>
    

    <button (click)="greetEvent($event)">Greet Event</button> {{eventName}}

    <br>
    <br>
    <button (click)="name ='Template Statement'">Greet</button> {{name}}
  `,
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  public eventbinding="Event Binding";
  public name ="";
  public eventName ="";
  constructor() { }

  ngOnInit(): void {
  }

  onclick()
  {
    this.name="Event Binding";
  }

  greetEvent(event)
  {
    this.eventName=event.type;
  }
}
