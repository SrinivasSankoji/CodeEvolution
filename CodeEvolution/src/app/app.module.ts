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
import { ParentchildComponent } from './parentchild/parentchild.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { ObservableComponent } from './observable/observable.component';
import { RoutingComponent } from './routing/routing.component';

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
    routingComponents
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
