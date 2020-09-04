import axios from 'axios'

const url = 'https://us-central1-dinosaurapi.cloudfunctions.net/api/dinosaur/'

export const http_get = (endpoint) => { 
    const request = `${url}${endpoint}`
    return axios.get(request)
}