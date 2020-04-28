import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notebook } from './model/notebook';
import { NoteserviceService } from '../service/noteservice.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notebooks:Notebook[]=[];

  constructor(private _notesService:NoteserviceService) { }

    ngOnInit() {
      this.getAllNoteBooks();
    }

    public getAllNoteBooks()
    {
      let url="http://localhost:1235//api/notebooks/all";
      this._notesService.getAllNoteBooks().subscribe(
        (response) =>{
          this.notebooks=response;
      },(error) =>{

      });
    }

    public createNotebook()
    {
      let newNotebook:Notebook={
        name:'New Notebook',
        id:null,
        nbNotes:0
      }
      this._notesService.postNotebook(newNotebook).subscribe((response) =>{
        newNotebook.id=response.id;
        this.notebooks.push(newNotebook);
      },(error) =>{
        alert("Error While Saving the Notebook");
      })
    }

    public updateNotebook(updatedNotebook:Notebook)
    {
      this._notesService.postNotebook(updatedNotebook).subscribe((response) =>{

      },(error) =>{
        alert("Error While Updating the Notebook");
      })
    }

    public deleteNotebook(notebook:Notebook)
    {
        if(confirm("Are You Sure You want to Delete the Notebook"))
        {
            this._notesService.deleteNotebook(notebook.id).subscribe((response) =>{
              let index=this.notebooks.indexOf(notebook);
              this.notebooks.splice(index,1);
            },(error) =>{
              alert("Unable to Delete the Record");
            })
        }
    }

}
