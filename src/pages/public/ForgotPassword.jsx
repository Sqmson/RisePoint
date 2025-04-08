import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
  Alert,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import { Email as EmailIcon } from '@mui/icons-material';

const ForgotPassword = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const steps = ['Email Verification', 'Reset Code', 'New Password'];

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // TODO: Implement password reset request
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSuccess(true);
    } catch (err) {
      setError('Failed to send reset email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCodeVerification = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // API call to verify code
      await verifyCode(email, code);
      setActiveStep(2);
    } catch (err) {
      setError(err.message || 'Invalid reset code');
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // API call to reset password
      await resetPassword(email, code, newPassword);
      setSuccess('Password successfully reset');
      // Redirect to login after delay
      setTimeout(() => {
        window.location.href = '/login';
      }, 3000);
    } catch (err) {
      setError(err.message || 'Failed to reset password');
    }
  };

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box component="form" onSubmit={handleEmailSubmit}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <EmailIcon sx={{ fontSize: 60, color: 'primary.main' }} />
            </Box>
            <Typography variant="body1" align="center" sx={{ mb: 3 }}>
              Enter your email address and we'll send you instructions to reset your password.
            </Typography>
            <TextField
              required
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Reset Instructions'}
            </Button>
          </Box>
        );

      case 1:
        return (
          <Box component="form" onSubmit={handleCodeVerification}>
            <Typography variant="body1" align="center" sx={{ mb: 3 }}>
              Enter the 6-digit code sent to your email.
            </Typography>
            <TextField
              required
              fullWidth
              label="Reset Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
            >
              Verify Code
            </Button>
          </Box>
        );

      case 2:
        return (
          <Box component="form" onSubmit={handlePasswordReset}>
            <Typography variant="body1" align="center" sx={{ mb: 3 }}>
              Enter your new password.
            </Typography>
            <TextField
              required
              fullWidth
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              required
              fullWidth
              label="Confirm New Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
            >
              Reset Password
            </Button>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Reset Password
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}

          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {renderStep()}

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Link component={RouterLink} to="/login" variant="body2">
              Back to Login
            </Link>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

// Mock API functions (replace with actual API calls)
const sendResetCode = async (email) => {
  // Simulate API call
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

const verifyCode = async (email, code) => {
  // Simulate API call
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

const resetPassword = async (email, code, newPassword) => {
  // Simulate API call
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

export default ForgotPassword; 