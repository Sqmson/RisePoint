import { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../firebase/config';
import { userService } from '../firebase/services/userService';
import { authService } from '../firebase/services/authService';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        try {
          const data = await userService.getUserById(user.uid);
          setUserData(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setError('Error loading user data');
        }
      } else {
        setUserData(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      setError('');
      const user = await authService.login(email, password);
      const data = await userService.getUserById(user.uid);
      setUserData(data);
      return user;
    } catch (error) {
      setError('Failed to login. Please check your credentials.');
      throw error;
    }
  };

  // Register function
  const register = async (email, password, userData) => {
    try {
      setError('');
      const user = await authService.register(email, password, userData);
      setUserData(userData);
      return user;
    } catch (error) {
      setError('Failed to create account.');
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      setError('');
      await authService.logout();
      setCurrentUser(null);
      setUserData(null);
    } catch (error) {
      setError('Failed to logout.');
      throw error;
    }
  };

  // Reset password
  const resetPassword = async (email) => {
    try {
      setError('');
      await authService.resetPassword(email);
    } catch (error) {
      setError('Failed to reset password.');
      throw error;
    }
  };

  // Update user profile
  const updateProfile = async (userId, updateData) => {
    try {
      setError('');
      await userService.updateUser(userId, updateData);
      const updatedData = await userService.getUserById(userId);
      setUserData(updatedData);
    } catch (error) {
      setError('Failed to update profile.');
      throw error;
    }
  };

  const value = {
    currentUser,
    userData,
    loading,
    error,
    login,
    register,
    logout,
    resetPassword,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Custom hook for protected routes
export function useProtectedRoute() {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return true; // Still loading
  }

  if (!currentUser) {
    return false; // Not authenticated
  }

  return true; // Authenticated
}

// Custom hook for role-based access
export function useRoleAccess(allowedRoles) {
  const { userData, loading } = useAuth();

  if (loading) {
    return false;
  }

  if (!userData || !allowedRoles.includes(userData.role)) {
    return false;
  }

  return true;
}