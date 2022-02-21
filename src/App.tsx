import React from 'react';
// import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import Note from './components/Note/Note';
import DUMMY_NOTES from './SEED_NOTES';
import INote from './interfaces/note.interface';

function App() {
  const [notesList, setNotesList] = useState<any[]>([])

  useEffect(() => {
    setNotesList(DUMMY_NOTES)
  }, [])


  // const getNotes = async() => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5000/notes`
  //     )
  //     //changing state the state variable of notesList to upload data from the API
  //     setNotesList(response.data.notes)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  //updating note item by mapping over each of the notes in the notesList array, then comparing...
  //the text/links based on their respective ids... if the updatedNote id matches the origin note id, it returns the update...
  //otherwise, the un-edited notes are returned to the array... we then use the setNotesList function from useState to update the array state
  const updateNoteItem = (updatedNote: INote) => {
    const updatedList = notesList.map((noteItem: INote) => {
      if(noteItem._id === updatedNote._id){
        return updatedNote
      }
      return noteItem
    })
    setNotesList(updatedList)
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
