import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth token interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API endpoints
export const endpoints = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
  },
  programs: {
    list: '/programs',
    details: (id) => `/programs/${id}`,
  },
  donations: {
    create: '/donations',
    history: '/donations/history',
  },
  volunteers: {
    signup: '/volunteers/signup',
    opportunities: '/volunteers/opportunities',
  },
  events: {
    list: '/events',
    register: '/events/register',
  },
};

export default api;