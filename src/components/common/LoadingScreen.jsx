import { Box, CircularProgress } from '@mui/material';

const LoadingScreen = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingScreen; 