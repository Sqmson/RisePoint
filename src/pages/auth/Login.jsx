import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  TextField, 
  Button, 
  Typography, 
  Link,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    navigate('/home');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #2E1371 0%, #7749F8 100%)',
        backgroundImage: `url('/path-to-your-mountains-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            padding: 4,
            borderRadius: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography 
            component="h1" 
            variant="h4" 
            align="center" 
            sx={{ 
              mb: 4, 
              color: 'white',
              fontWeight: 'bold'
            }}
          >
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              placeholder="Username"
              name="username"
              autoComplete="username"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': { border: 'none' },
                },
                mb: 2
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': { border: 'none' },
                },
              }}
            />
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              mt: 2 
            }}>
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                    sx={{ color: 'white' }}
                  />
                }
                label="Remember me"
                sx={{ color: 'white' }}
              />
              <Link 
                component={RouterLink} 
                to="/forgot-password"
                sx={{ 
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                Forgot Password?
              </Link>
            </Box>
            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: 'white',
                color: '#2E1371',
                borderRadius: '20px',
                textTransform: 'none',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              Login
            </Button>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2" sx={{ color: 'white' }}>
                Don't have an account?{' '}
                <Link
                  component={RouterLink}
                  to="/register"
                  sx={{ 
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  Register
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;