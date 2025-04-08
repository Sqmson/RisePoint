import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, Box, ThemeProvider, createTheme } from '@mui/material';
import { useAuth } from './context/AuthContext';

import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';

import Home from './pages/public/Home';
import About from './pages/public/About';
import Programs from './pages/public/Programs';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

function App() {
  const { currentUser, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  const ProtectedLayout = ({ children }) => (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', flex: 1, mt: '64px' }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: 'auto', minHeight: 'calc(100vh - 64px)' }}>
          {children}
        </Box>
      </Box>
    </>
  );

  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
        <Routes>
          {/* Authenticated Routes */}
          <Route
            path="/"
            element={
              currentUser?.role === 'admin' ? (
                <Navigate to="/admin-dashboard" replace />
              ):(
                <ProtectedLayout><Home /></ProtectedLayout>
              )
            }
          />
          <Route
            path="/about"
            element={
              currentUser ? (
                <ProtectedLayout><About /></ProtectedLayout>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/programs"
            element={
              currentUser ? (
                <ProtectedLayout><Programs /></ProtectedLayout>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Public Routes */}
          <Route path="/login" element={!currentUser ? <Login /> : <Navigate to="/" replace />} />
          <Route path="/register" element={!currentUser ? <Register /> : <Navigate to="/" replace />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
