import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-departmentlist',
  template:`
  <h3>Department List</h3>
  <ul class="items">
  <li (click)=onSelect(department) [class.selected]="isSelected(department)" *ngFor="let department of departments">
  <span class="badge">{{department.id}}</span>{{department.name}}
  </li>
  </ul>

  `,
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  public selectedId;

  departments = [
    {"id":"1","name":"Angular"},
    {"id":"2","name":"Node"},
    {"id":"3","name":"MongoDB"},
    {"id":"4","name":"Ruby"},
    {"id":"5","name":"Bootstrap"}
  ];

  constructor(private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap) => {
      let id=parseInt(params.get('id'));
      this.selectedId=id;
    });
  }

  onSelect(department)
  {
      //this.router.navigate(['/departmentdetail',department.id]);
      this.router.navigate([department.id],{relativeTo:this.activatedRoute});
  }

  isSelected(department)
  {
    return department.id === this.selectedId;
  }

}