import { Container, Typography, Paper, Box, Divider } from '@mui/material';

const Terms = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Terms and Conditions
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph>
            Last updated: March 2024
          </Typography>
          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            1. Acceptance of Terms
          </Typography>
          <Typography paragraph>
            By accessing and using RisePoint's services, you agree to be bound by these Terms and Conditions.
          </Typography>

          <Typography variant="h6" gutterBottom>
            2. Program Participation
          </Typography>
          <Typography paragraph>
            Participation in our programs requires adherence to program-specific guidelines and requirements.
            Users must provide accurate information and maintain active engagement.
          </Typography>

          <Typography variant="h6" gutterBottom>
            3. User Responsibilities
          </Typography>
          <Typography paragraph>
            Users are responsible for maintaining the confidentiality of their account information
            and for all activities that occur under their account.
          </Typography>

          {/* Add more sections as needed */}
        </Paper>
      </Box>
    </Container>
  );
};

export default Terms; 