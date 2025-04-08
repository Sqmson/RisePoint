import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ProtectedRoute from '../components/auth/ProtectedRoute';
import RoleRoute from '../components/auth/RoleRoute';

// Public Pages
import Home from '../pages/public/Home';
import About from '../pages/public/About';
import Programs from '../pages/public/Programs';
import Login from '../pages/public/Login';
import Register from '../pages/public/Register';
import ForgotPassword from '../pages/public/ForgotPassword';
import Unauthorized from '../pages/public/Unauthorized';
import NotFound from '../pages/public/NotFound';

// Protected Pages
import Dashboard from '../pages/protected/Dashboard';
import Profile from '../pages/protected/Profile';
import Support from '../pages/protected/Support';

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Auth Routes First */}
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
      <Route path="/register" element={!user ? <Register /> : <Navigate to="/dashboard" />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Other Public Routes */}
      <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Support />} />
      </Route>

      {/* Catch all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes; 