import axios from 'axios';

const baseUrl = "https://fakestoreapi.com"

const api = axios.create({
  baseURL: baseUrl
})

export default api;