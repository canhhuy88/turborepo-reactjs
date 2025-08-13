import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3200/api', // gốc API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor để tự động gắn Authorization header
axiosClient.interceptors.request.use(
  (config) => {
   const token = localStorage.getItem('token'); // hoặc sessionStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor: xử lý token hết hạn
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token hết hạn hoặc không hợp lệ
      localStorage.removeItem('token') // Xoá token cũ
      window.location.href = '/login' // Redirect về trang login
    }
    return Promise.reject(error)
  }
)

export default axiosClient;
