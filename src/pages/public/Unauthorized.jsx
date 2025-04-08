import { Box, Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ 
        textAlign: 'center', 
        py: 8,
        '@media (forced-colors: active)': {
          borderColor: 'CanvasText',
        }
      }}>
        <Typography variant="h4" gutterBottom>
          Access Denied
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          You don't have permission to access this page.
        </Typography>
        <Button
          component={RouterLink}
          to="/login"
          variant="contained"
          size="large"
          sx={{ mr: 2 }}
        >
          Login
        </Button>
        <Button
          component={RouterLink}
          to="/"
          variant="outlined"
          size="large"
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default Unauthorized; 