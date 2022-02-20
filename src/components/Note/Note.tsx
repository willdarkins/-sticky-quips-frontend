import React, { FC } from 'react'
import INote from '../../interfaces/note.interface'
import './Note.css'

//using TypeScript to identify what our props will be passing to the Note component
type Props = {
    note: INote
}
//the FC(Functional Component) will take in the Props type and de-construct the note property to pass all the info from INote
const Note: FC<Props> = ({note}) => {
  return (
    <div className='note'>
    <div className='note__text'>{note.text}</div>
    <div className='note__link'>
        <a href={note.link}>{note.link}</a>
    </div>
  </div>
  )
}

export default Note