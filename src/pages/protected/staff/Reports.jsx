import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Stack,
} from '@mui/material';
import {
  Download as DownloadIcon,
  Refresh as RefreshIcon,
} from '@mui/icons-material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from 'recharts';

const Reports = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [reportType, setReportType] = useState('applications');

  // Mock data
  const applicationStats = [
    { date: '2024-03-15', received: 12, processed: 8, approved: 6 },
    { date: '2024-03-16', received: 15, processed: 10, approved: 7 },
    { date: '2024-03-17', received: 8, processed: 6, approved: 4 },
    { date: '2024-03-18', received: 20, processed: 15, approved: 12 },
  ];

  const programProgress = [
    { program: 'Business Incubation', completed: 75, target: 100 },
    { program: 'Digital Skills', completed: 45, target: 60 },
    { program: 'Agriculture', completed: 30, target: 40 },
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h4">Staff Reports</Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              startIcon={<RefreshIcon />}
              onClick={() => {/* Refresh data */}}
            >
              Refresh
            </Button>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={() => {/* Download report */}}
            >
              Download Report
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Time Range</InputLabel>
            <Select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <MenuItem value="week">Last Week</MenuItem>
              <MenuItem value="month">Last Month</MenuItem>
              <MenuItem value="quarter">Last Quarter</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Report Type</InputLabel>
            <Select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <MenuItem value="applications">Applications</MenuItem>
              <MenuItem value="programs">Programs</MenuItem>
              <MenuItem value="participants">Participants</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Application Processing Overview
            </Typography>
            <LineChart
              width={1000}
              height={300}
              data={applicationStats}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="received" stroke="#8884d8" />
              <Line type="monotone" dataKey="processed" stroke="#82ca9d" />
              <Line type="monotone" dataKey="approved" stroke="#ffc658" />
            </LineChart>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Program Progress
            </Typography>
            <BarChart
              width={1000}
              height={300}
              data={programProgress}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="program" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#82ca9d" />
              <Bar dataKey="target" fill="#8884d8" />
            </BarChart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reports; 