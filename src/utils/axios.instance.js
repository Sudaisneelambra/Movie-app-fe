import axios from 'axios';
// require('dotenv').config();
// const base_api = process.env.BASE_API

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3333',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
