// src/services/categoryService.js
import axiosClient from './axiosClient';

export const fetchCategories = async (page = 1, limit = 5, name = '') => {
  try {
    const res = await axiosClient.post('/categories/get-category', {
      page,
      limit,
      name,
    });

    return res.data;
  } catch (error) {
    console.error('Lỗi khi fetch category:', error);
    return null;
  }
};

export const fetchCategoriesSecondWay = async (page = 1, limit = 5, name = '') => {
   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5ODg2YjA4Ny1iZGQzLTRkMzEtYWVmZi1mNDY0ZDc5ZDg1MjgiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NTQ0NzA1MzcsImV4cCI6MTc1NDU1NjkzN30.C0aSniKS4Z9PaFzf0rQ_pwsemfzmQ68jiRs0EGUzSd4';
  try {
    const res = await fetch('http://localhost:3200/api/categories/get-category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ page, limit, name }),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Lỗi khi fetch category:', error);
    return null;
  }
};
