import { NgModule, enableProdMode } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { NotesComponent } from './notes/notes.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { enableDebugTools } from '@angular/platform-browser';
import { config } from 'rxjs';


const appRoutes: Routes = [
  {path:'notes',component:NotesComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'',component:NotesComponent,pathMatch:'full'},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents =[NotesComponent,
  FeedbackComponent,
  NotfoundComponent
  ];
