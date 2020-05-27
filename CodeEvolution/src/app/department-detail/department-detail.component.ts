import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap}  from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl:'department-detail.component.html' ,
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) 
  { 

  }

  ngOnInit(): void {
    /**Route Parameter to read the Parameter from the URL */
    //let id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    //this.departmentId=id;
    /** Param Map Observable to read the Route Parameter from the URL */
    this.activatedRoute.paramMap.subscribe((params :ParamMap) => {
      let id=parseInt(params.get('id'));
      this.departmentId=id;
    });
  }

  goPrevious()
  {
      let previousId=this.departmentId-1;
      this.router.navigate(['/departmentdetail',previousId]);
  }
  goNext()
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
