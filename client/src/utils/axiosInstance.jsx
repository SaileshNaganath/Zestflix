import axios from 'axios';
import {API_BASE_URL,TIMEOUT} from "../config/Config";

// Create a new Axios instance with custom configuration
const AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: TIMEOUT
  });
  
  // Add a request interceptor to include the JWT token in the headers
  AxiosInstance.interceptors.request.use(
    (config) => {
      // Retrieve the token from wherever it's stored (e.g., localStorage)
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['x-access-token'] = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  export default AxiosInstance;