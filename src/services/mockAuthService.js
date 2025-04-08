// Mock user data
const MOCK_USER = {
  id: '1',
  firstName: 'Test',
  lastName: 'User',
  email: 'test@example.com',
  roles: ['user'],
};

// Mock authentication delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const loginUser = async (credentials) => {
  await delay(500); // Simulate network delay

  // Simple validation
  if (credentials.email === 'test@example.com' && credentials.password === 'password123') {
    return {
      user: MOCK_USER,
      token: 'mock-jwt-token',
      expiry: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours from now
    };
  }
  throw new Error('Invalid email or password');
};

export const registerUser = async (userData) => {
  await delay(500);
  
  return {
    user: {
      ...MOCK_USER,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    },
    token: 'mock-jwt-token',
    expiry: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };
};

export const loginWithGoogle = async () => {
  await delay(500);
  
  return {
    user: MOCK_USER,
    token: 'mock-jwt-token',
    expiry: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };
};

export const refreshToken = async () => {
  await delay(500);
  
  return {
    token: 'mock-jwt-token',
    expiry: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  };
};

export default {
  loginUser,
  registerUser,
  loginWithGoogle,
  refreshToken,
}; 