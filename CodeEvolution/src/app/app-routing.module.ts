import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';


const routes: Routes = [

  {path:'departments',component:DepartmentlistComponent},
  {path:'employees',component:EmployeelistComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[DepartmentlistComponent,EmployeelistComponent];
