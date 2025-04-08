import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Home from './pages/public/Home';
import About from './pages/public/About';
import Programs from './pages/public/Programs';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <ThemeProvider theme={createTheme()} >
      <CssBaseline />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
          <Navbar />
          <Box sx={{ display: 'flex', flex: 1, mt: '64px' }}>
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: 'auto', minHeight: 'calc(100vh - 64px)' }}>
              <Routes>
                <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
                <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/login" />} />
                <Route path="/programs" element={isAuthenticated ? <Programs /> : <Navigate to="/login" />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/register" element={<Register onRegister={handleLogin} />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </Box>
          </Box>
        </Box>
    </ThemeProvider>
  );
}

export default App;