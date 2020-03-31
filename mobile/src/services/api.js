import axios from 'axios';

const baseURL = 'http://1a35d442.ngrok.io';

const api = axios.create({
    baseURL: baseURL
})

export default api;