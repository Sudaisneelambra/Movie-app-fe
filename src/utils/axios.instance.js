import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../features/userSlice';
// import { removeToken } from '../features/tokenSlice';


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

axiosInstance.interceptors.response.use(
    (response) => {
        if(response.data.expiry){
            alert('JWT expired or error occurred');
            localStorage.clear();
            window.location.href = '/';
        }
        return response;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error); // Return the error to be handled later if needed
    }
);
export default axiosInstance;
