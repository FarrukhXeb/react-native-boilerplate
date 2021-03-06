import axios from 'axios';
import {storage} from '../utils/storage';
const http = axios.create({
  baseURL: 'http://10.0.2.2:7000/api/v1',
});

http.defaults.headers.post['Content-Type'] = 'application/json';

http.interceptors.request.use(
  (config) => {
    const token = storage.get('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// http.interceptors.response.use(
//   async (response) => {
//     if (response.status >= 200 && response.status < 300) {
//       if (response.data.message) {
//         showAlert(response.data.message, 'success');
//       }
//       return response.data;
//     }
//   },
//   (error) => {
//     const {response, request} = error;

//     if (response) {
//       if (response.status >= 400 && response.status < 500) {
//         showAlert(response.data?.message, 'error');
//         return response.data;
//       }
//     } else if (request) {
//       showAlert('Request failed. Please try again.', 'error');
//       return null;
//     }
//     return Promise.reject(error);
//   },
// );

export default http;
