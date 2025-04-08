import { Box, Container, Grid, Typography, Link, IconButton, Stack } from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              RisePoint
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Empowering communities through education, economic development, and agricultural innovation.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton size="small" color="primary">
                <FacebookIcon />
              </IconButton>
              <IconButton size="small" color="primary">
                <TwitterIcon />
              </IconButton>
              <IconButton size="small" color="primary">
                <LinkedInIcon />
              </IconButton>
              <IconButton size="small" color="primary">
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Grid>
          
          <Grid item xs={6} sm={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Programs
            </Typography>
            <Stack spacing={1}>
              <Link href="/programs" color="text.secondary" underline="hover">
                Training
              </Link>
              <Link href="/economic-development" color="text.secondary" underline="hover">
                Business
              </Link>
              <Link href="/agricultural-programs" color="text.secondary" underline="hover">
                Agriculture
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Support
            </Typography>
            <Stack spacing={1}>
              <Link href="/help" color="text.secondary" underline="hover">
                Help Center
              </Link>
              <Link href="/contact" color="text.secondary" underline="hover">
                Contact Us
              </Link>
              <Link href="/faq" color="text.secondary" underline="hover">
                FAQ
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={6} sm={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Legal
            </Typography>
            <Stack spacing={1}>
              <Link href="/privacy" color="text.secondary" underline="hover">
                Privacy Policy
              </Link>
              <Link href="/terms" color="text.secondary" underline="hover">
                Terms of Use
              </Link>
              <Link href="/cookies" color="text.secondary" underline="hover">
                Cookie Policy
              </Link>
            </Stack>
          </Grid>
        </Grid>
        
        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="center"
          sx={{ mt: 4 }}
        >
          © {new Date().getFullYear()} RisePoint. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 