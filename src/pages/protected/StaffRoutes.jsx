import { Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import StaffDashboard from './staff/Dashboard';
import ApplicationReview from './staff/ApplicationReview';
import ProgramSchedule from './staff/ProgramSchedule';
import Reports from './staff/Reports';

const StaffRoutes = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Routes>
          <Route index element={<StaffDashboard />} />
          <Route path="applications" element={<ApplicationReview />} />
          <Route path="schedule" element={<ProgramSchedule />} />
          <Route path="reports" element={<Reports />} />
        </Routes>
      </Container>
    </Box>
  );
};

export default StaffRoutes; 