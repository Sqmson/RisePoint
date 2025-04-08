import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate registration
    if (email && password) {
      alert("Account created!");
      // Navigate to login or dashboard
      navigate('/login');
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h4" gutterBottom>Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField fullWidth type="password" label="Password" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>Register</Button>
      </form>
      <Button onClick={() => navigate('/login')} sx={{ mt: 2 }}>Already have an account? Login</Button>
    </Box>
  );
};

export default Register;
