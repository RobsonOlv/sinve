import axios from 'axios';

const apiURL = 'http://localhost:5500/';

const api = axios.create({
  withCredentials: false,
  baseURL: apiURL,
});

const errorHandler = (error: any) => {
  const statusCode = error.response?.status;

  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

api.interceptors.response.use(undefined, (error) => errorHandler(error));

export default api;