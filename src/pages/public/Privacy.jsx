import { Container, Typography, Paper, Box, Divider } from '@mui/material';

const Privacy = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Privacy Policy
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            Last updated: March 2024
          </Typography>
          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            1. Information We Collect
          </Typography>
          <Typography paragraph>
            We collect information that you provide directly to us, including personal information
            such as your name, email address, and other details necessary for program participation.
          </Typography>

          <Typography variant="h6" gutterBottom>
            2. How We Use Your Information
          </Typography>
          <Typography paragraph>
            Your information is used to provide and improve our services, communicate with you,
            and ensure program effectiveness.
          </Typography>

          <Typography variant="h6" gutterBottom>
            3. Information Security
          </Typography>
          <Typography paragraph>
            We implement appropriate security measures to protect your personal information
            from unauthorized access or disclosure.
          </Typography>

          {/* Add more sections as needed */}
        </Paper>
      </Box>
    </Container>
  );
};

export default Privacy; 