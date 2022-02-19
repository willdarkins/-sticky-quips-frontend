import React from 'react';
import './App.css';

function App() {

const getNotes = () => {
  console.log('I\'m incredible at fucking')
}

  return (
    <div className="App">
      <div>Notes Application</div>
      <div>
        <button onClick={() => {getNotes}}>
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
