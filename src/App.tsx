import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Note from './components/Note/Note';
import { getNotes, createNote, deleteNote, updateNote } from './services/notesService';
import INote from './interfaces/note.interface';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import NavBar from './components/Navbar/NavBar';

function App() {
  //state to handle notes array
  const [notesList, setNotesList] = useState<INote[]>([])
  //state to handle showing and closing modal to write a note
  const [showNoteModal, setshowNoteModal] = useState(false);
  //state to handle creating a new note by passing the partial INote with empty values to begin as the inital state
  const [newNote, setNewNote] = useState<Partial<INote>> ({
    text: '',
    link: ''
  })

  //function to close modal and set text & link values to empty so there is no repeat
  const handleCloseNoteModal = () => {
    setNewNote({
      text: '',
      link: ''
    })
    setshowNoteModal(false)
  }
  //function to open modal
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
  const updateNoteItem = async (updatedNote: INote) => {
    const noteFromServer = await updateNote(updatedNote)
    const updatedList = notesList.map((noteItem: INote) => {
      if (noteItem._id === noteFromServer._id) {
        return noteFromServer
      }
      return noteItem
    })
    setNotesList(updatedList) //updating state of notesList
  }

  //adding a note to the database and creating a new note through the UI...
  //using spread operator to return the entire notes list in the setNotesList state function, and the newly created, saved note...
  //modal closes after creation
  const addNote = async () => {
    const savedNote = await createNote(newNote)
    setNotesList([...notesList, savedNote])
    handleCloseNoteModal();
  }

  //deleting note from database and UI...
  //we're calling the deleteNoteItem function passing a note to delete, which is INote...
  //we then call the deleteNote function from the notesService file and pass the ID...
  //we also want to assign the remaining notes to a variable and filter out the notes that do not have the delted ID...
  //it's at that point we re-render the notes list with the functional state component, passing the remainingNotes variable

  const delteNoteItem = async (noteToDelete: INote) => {
    await deleteNote(noteToDelete._id);
    const remainingNotes = notesList.filter((noteItem) => {
      return noteItem._id !== noteToDelete._id;
    })
    setNotesList(remainingNotes)
  }

  return (
    <div className="App">
      <NavBar />
      <Button className='add-button' variant="dark" onClick={handleShowNoteModal}>
        <div className='add-button-text'>+</div>
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
          <Button variant="secondary" onClick={addNote}>
            Close
          </Button>
          <Button variant="primary" onClick={addNote}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="notes-list">
        {notesList.length >= 1 ? notesList.map((noteItem, index) => {
          return (
            <Note note={noteItem} onNoteUpdate={updateNoteItem} onNoteDelete={delteNoteItem} key={index} />
          )
        }):
        <h1>There are no Sticky Quips to display! 🤷‍♂️</h1>}
      </div>
    </div>
  );
}

export default App;
