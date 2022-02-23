import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Note from './components/Note/Note';
import { getNotes } from './services/notesService';
import INote from './interfaces/note.interface';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';

function App() {
  //state to handle notes array
  const [notesList, setNotesList] = useState<INote[]>([])
  //state to handle showing and closing modal to write a note
  const [showNoteModal, setshowNoteModal] = useState(false);
  const [newNote, setNewNote] = useState<Partial<INote>> ({
    text: '',
    link: ''
  })

  //functions to close and open modals
  const handleCloseNoteModal = () => setshowNoteModal(false);
  const handleShowNoteModal = () => setshowNoteModal(true);

  //calling getNotesFromServer when app fires up first time 
  useEffect(() => {
    getNotesFromServer();
  }, [])

  //creating separate async function to call the axios.get method from the imported getNotes function in notesService
  const getNotesFromServer = async () => {
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
      <Button variant="primary" onClick={handleShowNoteModal}>
        Write a sticky quip!
      </Button>
      <Modal show={showNoteModal} onHide={handleCloseNoteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Quip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingTextarea2" label="text">
            <Form.Control
              onChange={(event) => {
                const newVal = event.currentTarget.value;
                setNewNote({
                  ...newNote,
                  text: newVal
                })
              }}
              as="textarea"
              placeholder="Write your quip!"
              style={{ height: '100px' }} />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea"
            label="link"
            className="mb-3 note-link">
            <Form.Control
              onChange={(event) => {
                const newVal = event.currentTarget.value;
                setNewNote({
                  ...newNote,
                  link: newVal
                })
              }}
              type="url"
              placeholder="Enter note link" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseNoteModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseNoteModal}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
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
