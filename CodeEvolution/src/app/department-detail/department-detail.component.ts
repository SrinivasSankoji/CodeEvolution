import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap}  from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template:`
  <h3>Selected Department is {{departmentId}}<h3>
  <a (click)="goPrevious()">Previous</a>
  <a (click)="goNext()">Next</a>

  <div>
    <button (clcik)="goToDepartment()">Back</button>
  </div>

  ` ,
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) 
  { 

  }

  ngOnInit(): void {
    //let id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    //this.departmentId=id;
    this.activatedRoute.paramMap.subscribe((params :ParamMap) => {
      let id=parseInt(params.get('id'));
      this.departmentId=id;
    });
  }

  public goPrevious()
  {
      let previousId=this.departmentId-1;
      this.router.navigate(['/departmentdetail',previousId]);
  }
  public goNext()
  {
    let nextId=this.departmentId+1;
    this.router.navigate(['/departmentdetail',nextId]);
  }

  public goToDepartment()
  {
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/departmentlist', {id: selectedId}]);
    this.router.navigate(['../',{id: selectedId}],{relativeTo:this.activatedRoute});
    //Go Back One Segment in the URl
  }

}