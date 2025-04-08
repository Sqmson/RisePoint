import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { TextField, Button, Typography, Box } from '@mui/material';

const Login = () => {
  const { login, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/dashboard'); // Change this later if needed
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 4 }}>
      <Typography variant="h5" gutterBottom>Login</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Login</Button>
      </form>
    </Box>
  );
};

export default Login;
