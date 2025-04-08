import { Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import AdminDashboard from './admin/Dashboard';
import UserManagement from './admin/UserManagement';
import ProgramManagement from './admin/ProgramManagement';
import SystemSettings from './admin/SystemSettings';

const AdminRoutes = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="programs" element={<ProgramManagement />} />
          <Route path="settings" element={<SystemSettings />} />
        </Routes>
      </Container>
    </Box>
  );
};

export default AdminRoutes; 