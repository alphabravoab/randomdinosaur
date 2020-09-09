import axios from 'axios'

const url = process.env.BASE_URL
console.log(url)

export const http_get = (endpoint) => { 
    const request = `${url}${endpoint}`
    return axios.get(request)
}