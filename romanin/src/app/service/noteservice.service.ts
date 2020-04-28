import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notebook } from '../notes/model/notebook';
import { FeedbackViewModel } from '../feedback/feedback.component';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  private baseurl="http://localhost:1235//api/";

  constructor(private _http:HttpClient) { }

  public getAllNoteBooks():Observable<Notebook[]>
  {
    return this._http.get<Notebook[]>(this.baseurl+'notebooks/all');
  }

  public postFeedback(feedback:FeedbackViewModel):Observable<any>{
    return this._http.post<any>(this.baseurl+'feedback',feedback);
  }

  public postNotebook(notebook:Notebook):Observable<Notebook>
  {
   return this._http.post<Notebook>(this.baseurl+'/notebooks',notebook);
  } 

  public deleteNotebook(id:string):Observable<any>
  {
    return this._http.delete(this.baseurl+'/notebooks/'+id);
  }
}
