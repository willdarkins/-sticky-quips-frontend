import axios from "axios"
import { NOTES_API_URL } from "../constants/api"

export const getNotes = async() => {
    try {
      const response = await axios.get(NOTES_API_URL)
      //returning the response with data and notes
      return response.data.notes
    } catch (err) {
      console.error(err)
    }
  }

