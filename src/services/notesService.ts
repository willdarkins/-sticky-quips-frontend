import axios from "axios"
import { NOTES_API_URL } from "../constants/api"
import INote from "../interfaces/note.interface"

export const getNotes = async() => {
    try {
      const response = await axios.get(NOTES_API_URL)
      //returning the response with data and notes
      return response.data.notes
    } catch (err) {
      console.error(err)
    }
  }

  //post method that is using only the Partial of INote model due to the fact we DO NOT want the ID back in our response for the UI...
  //the URL and newNote are then passed and returned using the 'note' property that's in the body response 
  export const createNote = async(newNote: Partial<INote>) => {
    try {
      const response = await axios.post(NOTES_API_URL, newNote)
      //returning the response with data and notes
      return response.data.note
    } catch (err) {
      console.error(err)
    }
  }

  export const deleteNote = async(noteToDeleteId: string) => {
    try {
      const URL = `${NOTES_API_URL}/${noteToDeleteId}`
      const response = await axios.delete(URL)
      //returning the response with data and notes
      return response.data.reply
    } catch (err) {
      console.error(err)
    }
  }