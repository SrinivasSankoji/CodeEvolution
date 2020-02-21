import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'parentchild',
  template: `
  <div>
  <h2>{{"Hello "+name}}</h2>

  <button (click)="sendEvent()">Send Event</button>
  </div>
  `,
  styleUrls: ['./parentchild.component.css']
})
export class ParentchildComponent implements OnInit {

  @Input('parentData') public name;

  @Output() public childEvent= new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  sendEvent()
  {
    this.childEvent.emit("Hi Parent From Child");
  }

}
