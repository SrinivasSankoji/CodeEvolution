import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-departmentlist',
  templateUrl:'./departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {

  public selectedId:any;

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
    /** To Read the Route Parameter 
    we make use of activatedRoute using paramMap */
    this.activatedRoute.paramMap.subscribe((params:ParamMap) => {
      let id=parseInt(params.get('id'));
      this.selectedId=id;
    });
  }

  onSelect(department:any)
  {
      /** Route Parameter Example */ 
      this.router.navigate(['/departmentdetail',department.id]);
      /** ParamMap Observable Example */
      //this.router.navigate([department.id],{relativeTo:this.activatedRoute});
  }

  isSelected(department:any)
  {
    return department.id === this.selectedId;
  }

}
