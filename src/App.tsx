import React from 'react';
// import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import Note from './components/Note/Note';
import DUMMY_NOTES from './SEED_NOTES';

function App() {
const [ notesList, setNotesList ] = useState<any []>([])

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
console.log(notesList)
  return (
    <div className="App">
      <div className="notes-list">
        {notesList.map((noteItem, index) => {
          return(
            <Note note={noteItem} key={index}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
