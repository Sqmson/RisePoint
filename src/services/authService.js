import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const loginUser = async (credentials) => {
  try {
    const { data } = await api.post('/auth/login', credentials);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export const verify2FA = async (code) => {
  try {
    const { data } = await api.post('/auth/verify-2fa', { code });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Verification failed');
  }
};

export const refreshToken = async () => {
  try {
    const { data } = await api.post('/auth/refresh');
    return data;
  } catch (error) {
    throw new Error('Session expired');
  }
};

export const registerUser = async (userData) => {
  try {
    const { data } = await api.post('/auth/register', userData);
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

export const requestPasswordReset = async (email) => {
  try {
    const { data } = await api.post('/auth/forgot-password', { email });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Password reset request failed');
  }
};

export const resetPassword = async (token, newPassword) => {
  try {
    const { data } = await api.post('/auth/reset-password', {
      token,
      newPassword,
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Password reset failed');
  }
};

// Add this function to handle Facebook login
export const loginWithFacebook = async (accessToken, userID) => {
  try {
    const { data } = await api.post('/auth/facebook', {
      accessToken,
      userID,
    });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Facebook login failed');
  }
};

export const loginWithGoogle = async (credential) => {
  try {
    const { data } = await api.post('/auth/google', { credential });
    return data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Google login failed');
  }
};

export default api; 