import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthWrapper({ children }) {
  const navigate = useNavigate();
  const protectedRoutes = ['/profile', '/dashboard'];

  useEffect(() => {
    const token = localStorage.getItem('token');
    const currentPath = window.location.pathname;

    if (protectedRoutes.includes(currentPath) && !token) {
      navigate('/login');
    }
  }, [navigate]);

  return children;
}

export default AuthWrapper; 