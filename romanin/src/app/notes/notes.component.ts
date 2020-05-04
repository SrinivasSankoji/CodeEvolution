import { Component, OnInit } from '@angular/core';
import { Notebook } from './model/notebook';
import { NoteserviceService } from '../service/noteservice.service';
import { Note } from './model/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notebooks:Notebook[]=[];
  notes:Note[]=[];
  selectedNotebook:Notebook;

  constructor(private _notesService:NoteserviceService) { }

    ngOnInit() {
      this.getAllNoteBooks();
      this.getAllNotes();
    }

    public getAllNoteBooks()
    {
      this._notesService.getAllNoteBooks().subscribe((response) =>{
          this.notebooks=response;
      },(error) =>{
        alert("Unable to get all the NoteBooks");
      });
    }

    public getAllNotes()
    {
        this._notesService.getAllNotes().subscribe((response) =>{
        this.notes = response;
        },(error) =>{
          alert("Unable to get all the Notes");
        });
    }

    /**public getNotesByNotebookId()
    {
      this._notesService.getNotesByNotebookId().subscribe((response)=>{

      },(error) =>{
        alert("Error while Geeting the Notes by Id");
      });
    }**/


    public createNotebook()
    {
      let newNotebook:Notebook={
        name:'New Notebook',
        id:null,
        nbNotes:0
      }
      this._notesService.saveNotebook(newNotebook).subscribe((response) =>{
        newNotebook.id=response.id;
        this.notebooks.push(newNotebook);
      },(error) =>{
        alert("Error While Saving the Notebook");
      })
    }

    public createNote(notebookId:string)
    {
        let newNote:Note ={
          id:null,
          title:'New Notes',
          text:'Creating Notes',
          notebookId:notebookId,
          lastModifiedOn:null
        }
        this._notesService.saveNote(newNote).subscribe((response)=>{
          newNote.id=response.id;
          this.notes.push(newNote);
        },(error)=>{
          alert("Error While Creating Note");
        });
    }

    public updateNotebook(updatedNotebook:Notebook)
    {
      this._notesService.saveNotebook(updatedNotebook).subscribe((response) =>{
        alert("Notebook Name has Updated Successfully")
      },(error) =>{
        alert("Error While Updating the Notebook");
      })
    }

    public updateNote(updatedNote:Note)
    {
      this._notesService.saveNote(updatedNote).subscribe((response)=>{
        alert("Notes has Updated Successfully");
      },(error)=>{
        alert("Error While Updating Note ");
      });
    }

    public deleteNotebook(notebook:Notebook)
    {
        if(confirm("Are You Sure You want to Delete the Notebook"))
        {
            this._notesService.deleteNotebook(notebook.id).subscribe((response) =>{
              let index=this.notebooks.indexOf(notebook);
              this.notebooks.splice(index,1);
            },(error) =>{
              alert("Unable to Delete the Notebook");
            })
        }
    }

    public deleteNote(note:Note)
    {
      if(confirm("Are You Sure You want to Delete the Notebook"))
      {
        alert(note.id);
        this._notesService.deleteNote(note.id).subscribe((response) =>{
          let index=this.notes.indexOf(note);
          this.notes.splice(index,1);
        },(error) =>{
          alert("Unable to Delete the Note");
        })
      }

    }

   public selectNotebook(notebook:Notebook)
   {
      this.selectedNotebook=notebook;
      this._notesService.getNotesByNotebookId(notebook.id).subscribe((response) =>{
        this.notes=response;
      },(error) =>{
        alert("Error has Occured while Downloading the Notes");
      });
   }

   public selectAllNotes()
   {
      this.selectedNotebook=null;
      this.getAllNotes();
   }
}
