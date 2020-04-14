import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  topics =['Angular','Javascript','Forms'];

  userModel=new User('Bhaumik','bcs@gmail.com','7718973681','','Morning',true);
}
