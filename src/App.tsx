import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

const getNotes = async() => {
  try {
    const response = await axios.get(
      `http://localhost:5000/notes`
    )
    console.log(response)
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
    </div>
  );
}

export default App;
