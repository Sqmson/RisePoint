import { Box } from '@mui/material';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            minHeight: 'calc(100vh - 64px)', // Subtract navbar height
            bgcolor: 'background.default',
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}

export default MainLayout; 