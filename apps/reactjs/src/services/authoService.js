// src/services/categoryService.js
import axiosClient from './axiosClient';

export const fetchAutho = async (username, password) => {
  try {
    const res = await axiosClient.post('/auth/login', {
        username,
        password
      });

    return res.data;
  } catch (error) {
    console.error('Lỗi khi fetch category:', error);
    return null;
  }
};
