import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap}  from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template:`
  <h3>Selected Department is {{departmentId}}<h3>
  <a (click)="goPrevious()">Previous</a>
  <a (click)="goNext()">Next</a>
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
      this.router.navigate(['/departments',previousId]);
  }
  public goNext()
  {
    let nextId=this.departmentId+1;
    this.router.navigate(['/departments',nextId]);
  }

}
