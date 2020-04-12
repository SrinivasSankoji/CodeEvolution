import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import {EmployeeService} from './employee.service';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplatereferenceComponent } from './templatereference/templatereference.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { from } from 'rxjs';
import { ParentchildComponent } from './parentchild/parentchild.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { ObservableComponent } from './observable/observable.component';
import { RoutingComponent } from './routing/routing.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    InterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TemplatereferenceComponent,
    TwowaybindingComponent,
    ParentchildComponent,
    EmployeedetailComponent,
    ObservableComponent,
    RoutingComponent,
    routingComponents,
    PagenotfoundComponent,
    DepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
