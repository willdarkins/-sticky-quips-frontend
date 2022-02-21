import React, { FC, FocusEvent } from 'react'
import INote from '../../interfaces/note.interface'
import './Note.css'

//using TypeScript to identify what our props will be passing to the Note component
type Props = {
    note: INote
}

//function to grab textcontent from note after user clicks out of div
const noteTextUpdated = (event: FocusEvent<HTMLDivElement>) => {
    console.log('Note text has changed')
    console.log(event.currentTarget.textContent)
}

//the FC(Functional Component) will take in the Props type and de-construct the note property to pass all the info from INote
const Note: FC<Props> = ({ note }) => {
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