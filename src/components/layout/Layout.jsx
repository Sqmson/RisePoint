import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useAuth } from '../../context/AuthContext';
import { useLocation } from 'react-router-dom';
import { theme } from '../../theme';

const Layout = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  // Define auth-related paths where we don't want the header and footer
  const authPaths = ['/login', '/register', '/forgot-password'];
  const isAuthPage = authPaths.includes(location.pathname);

  if (isAuthPage) {
    return (
      <Box sx={{ 
        display: 'flex',
        minHeight: '100vh',
        bgcolor: 'background.default',
        '@media (forced-colors: active)': {
          borderColor: 'CanvasText',
          backgroundColor: 'Canvas',
          color: 'CanvasText',
        }
      }}>
        {children}
      </Box>
    );
  }

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        minHeight: '100vh', 
        bgcolor: 'background.default',
        '@media (forced-colors: active)': {
          // Modern approach for high contrast mode
          borderColor: 'CanvasText',
          backgroundColor: 'Canvas',
          color: 'CanvasText',
        }
      }}
    >
      <Navbar />
      {user && <Sidebar />}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          pt: '64px',
          ml: user ? { xs: 0, sm: '220px' } : 0,
          width: '100%',
          maxWidth: '100vw',
          overflow: 'auto',
          transition: theme => theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          '@media print': {
            overflow: 'visible',
          }
        }}
      >
        <Container 
          maxWidth="lg" 
          sx={{ 
            py: 2,
            px: { xs: 1, sm: 2 },
            flexGrow: 1,
            height: '100%',
          }}
        >
          {children}
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout; 