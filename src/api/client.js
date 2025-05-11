import axios from 'axios';

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  withCredentials: false,
});

export default client;