import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-54-89-160-231.compute-1.amazonaws.com:5500/',
});

export default api;
