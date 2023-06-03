import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://foodexplorer-backend-z6v4.onrender.com'
})
