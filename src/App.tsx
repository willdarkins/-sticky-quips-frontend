import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Note from './components/Note/Note';
import { getNotes } from './services/notesService';
import INote from './interfaces/note.interface';

function App() {
  const [notesList, setNotesList] = useState<INote[]>([])

  //calling getNotesFromServer when app fires up first time 
  useEffect(() => {
    getNotesFromServer(); 
  }, [])

  //creating separate async function to call the axios.get method from the imported getNotes function in notesService
  const getNotesFromServer = async() => {
    const notes = await getNotes();
    setNotesList(notes)
  } 

  //updating note item by mapping over each of the notes in the notesList array, then comparing...
  //the text/links based on their respective ids... if the updatedNote id matches the origin note id, it returns the update...
  //otherwise, the un-edited notes are returned to the array... we then use the setNotesList function from useState to update the array state
  const updateNoteItem = (updatedNote: INote) => {
    //temporary variable
    const updatedList = notesList.map((noteItem: INote) => {
      if (noteItem._id === updatedNote._id) {
        return updatedNote
      }
      return noteItem
    })
    setNotesList(updatedList) //updating state of notesList
  }

  return (
    <div className="App">
      <div className="notes-list">
        {notesList.map((noteItem, index) => {
          return (
            <Note note={noteItem} onNoteUpdate={updateNoteItem} key={index} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
