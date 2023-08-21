import axios from "axios"

const instance = axios.create({
  // baseURL: 'http://ah1to.online:8081/api'
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Content-Type': 'application/json',
  },
})

export default instance