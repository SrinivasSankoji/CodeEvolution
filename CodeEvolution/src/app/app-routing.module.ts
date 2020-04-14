import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';


const routes: Routes = [
  {path:'',redirectTo :'/departmentlist',pathMatch:'full'},
  {path:'departmentlist',component:DepartmentlistComponent},
  {path:'departmentdetail/:id',component:DepartmentDetailComponent},
  {path:'employees',component:EmployeelistComponent},
  {path:"**",component:PagenotfoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[DepartmentlistComponent,
                                EmployeelistComponent,
                                PagenotfoundComponent,
                                DepartmentDetailComponent];
