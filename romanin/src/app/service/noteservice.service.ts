import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notebook } from '../notes/model/notebook';
import { FeedbackViewModel } from '../feedback/feedback.component';
import { Note } from '../notes/model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {

  private baseurl="http://localhost:1235/api/";

  constructor(private _http:HttpClient) { }

  public getAllNoteBooks():Observable<Notebook[]>
  {
    return this._http.get<Notebook[]>(this.baseurl+'notebook/getAllNoteBooks');
  }

  public getAllNotes():Observable<Note[]>
  {
    return this._http.get<Note[]>(this.baseurl+'/notes/getAllNotes');
  }

  public saveNotebook(notebook:Notebook):Observable<Notebook>
  {
   return this._http.post<Notebook>(this.baseurl+'/notebook/saveNotebook',notebook);
  } 

  public saveNote(note:Note):Observable<Note>{
    return this._http.post<Note>(this.baseurl+'/notes/saveNotes',note);
  }

  public deleteNotebook(id:string):Observable<any>
  {
    return this._http.delete(this.baseurl+'/notebook/'+id);
  }

  public deleteNote(noteId:string):Observable<any>
  {
    return this._http.delete(this.baseurl+'/notes/'+noteId);
  }
  
  public getNotesByNotebookId(notebookId:string):Observable<Note[]>
  {
    return this._http.get<Note[]>(this.baseurl+'/notes/byNotebook/'+notebookId);
  }

  public postFeedback(feedback:FeedbackViewModel):Observable<any>{
    return this._http.post<any>(this.baseurl+'feedback',feedback);
  }
}
