import React from 'react';
import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {
const [ notesList, setNotesList ] = useState<any []>([])
const getNotes = async() => {
  try {
    const response = await axios.get(
      `http://localhost:5000/notes`
    )
    //changing state the state variable of notesList to upload data from the API
    setNotesList(response.data.notes)
  } catch (err) {
    console.error(err)
  }
}

  return (
    <div className="App">
      <div>Notes Application</div>
      <div>
        <button onClick={getNotes}>
          Click Me
        </button>
      </div>
      <div>
        {/* SHOW DETAILS DETAILS OF FIRST ELEMENT */}
        <h4>{notesList[0]?.text}</h4>
        <h5>{notesList[0]?.link}</h5>
      </div>
    </div>
  );
}

export default App;
