import React from 'react';
// import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import Note from './components/Note/Note';
import DUMMY_NOTES from './SEED_NOTES';
import INote from './interfaces/note.interface';

function App() {
  const [notesList, setNotesList] = useState<INote[]>([])

  //App component runs first time... BUT if the list from local storage is present we will parse that list...
  //then use the setNotesList state function to update the state with said list... otherwise it's dummy data
  useEffect(() => {
    const listFromStorage = localStorage.getItem('my-notes')
    if (listFromStorage) {
      const listFromStorageArray = JSON.parse(listFromStorage)
      setNotesList(listFromStorageArray)
    } else {
      setNotesList(DUMMY_NOTES)
    }
  }, [])

  //useEffect hook to save updated notes changes to local storage by creating new variable to stringify notesList array...
  //then set that variable in the local storage
  useEffect(() => {
    console.log('saving to localstorage')
    const notesListString = JSON.stringify(notesList)
    localStorage.setItem('my-notes', notesListString)
  }, [notesList])



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
