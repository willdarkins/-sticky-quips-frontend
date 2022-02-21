import React, { FC, FocusEvent } from 'react'
import INote from '../../interfaces/note.interface'
import './Note.css'

//using TypeScript to identify what our props will be passing to the Note component
type Props = {
    note: INote;
    onNoteUpdate: (note: INote) => void;
}

//the FC(Functional Component) will take in the Props type and de-construct the note property to pass all the info from INote
const Note: FC<Props> = ({ note, onNoteUpdate }) => {

    //function to grab textcontent from note after user clicks out of div
    const noteTextUpdated = (event: FocusEvent<HTMLDivElement>) => {
        //captured new value in variable then input that variable into an updated object that will spread the old text and link...
        //then use the onNoteUpdate function passed from App.tsx to pass the information along
        //we also run a conditional to make sure the text value has been changed before updating the note... this is for local storage
        const newTextValue = event.currentTarget.textContent
        if(newTextValue === note.text){
            return;
        }
        const updatedNoteObject: INote = {
            ...note,
            text: newTextValue || ''
        };
        onNoteUpdate(updatedNoteObject);
    }
    return (
        <div className='note'>
            <div className='note__text'
                contentEditable={true}
                suppressContentEditableWarning={true}
                onBlur={noteTextUpdated}
            >{note.text}</div>
            <div className='note__link'>
                <a href={note.link}>{note.link}</a>
            </div>
        </div>
    )
}

export default Note