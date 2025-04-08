import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { TextField, Button, Typography, Box } from '@mui/material';

const Register = () => {
  const { register, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { fullName, role: 'user' }; // adjust as needed
    try {
      await register(email, password, userData);
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 4 }}>
      <Typography variant="h5" gutterBottom>Register</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField label="Full Name" fullWidth margin="normal" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>Register</Button>
      </form>
    </Box>
  );
};

export default Register;
