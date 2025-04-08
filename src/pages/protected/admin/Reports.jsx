import { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
} from '@mui/material';
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
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import {
  Download as DownloadIcon,
  Refresh as RefreshIcon,
} from '@mui/icons-material';

const Reports = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [reportType, setReportType] = useState('overview');

  // Mock data
  const programStats = [
    { name: 'Business', participants: 120, completed: 45, active: 75 },
    { name: 'Education', participants: 85, completed: 30, active: 55 },
    { name: 'Agriculture', participants: 65, completed: 25, active: 40 },
    { name: 'Technology', participants: 95, completed: 35, active: 60 },
  ];

  const monthlyGrowth = [
    { month: 'Jan', users: 150, programs: 8 },
    { month: 'Feb', users: 180, programs: 10 },
    { month: 'Mar', users: 220, programs: 12 },
    { month: 'Apr', users: 280, programs: 15 },
  ];

  const userDistribution = [
    { name: 'Active', value: 65 },
    { name: 'Inactive', value: 20 },
    { name: 'Pending', value: 15 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const downloadReport = () => {
    // Implement report download logic
    console.log('Downloading report...');
  };

  const renderOverviewReport = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Program Performance
          </Typography>
          <BarChart
            width={700}
            height={300}
            data={programStats}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="participants" fill="#8884d8" />
            <Bar dataKey="completed" fill="#82ca9d" />
            <Bar dataKey="active" fill="#ffc658" />
          </BarChart>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            User Distribution
          </Typography>
          <PieChart width={300} height={300}>
            <Pie
              data={userDistribution}
              cx={150}
              cy={150}
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {userDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Monthly Growth Trends
          </Typography>
          <LineChart
            width={1000}
            height={300}
            data={monthlyGrowth}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="users"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="programs"
              stroke="#82ca9d"
            />
          </LineChart>
        </Paper>
      </Grid>
    </Grid>
  );

  const renderActivityLog = () => (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Recent Activities
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                date: '2024-03-15 14:30',
                user: 'John Doe',
                action: 'Program Enrollment',
                details: 'Enrolled in Business Incubation Program',
              },
              // Add more activity logs
            ].map((log, index) => (
              <TableRow key={index}>
                <TableCell>{log.date}</TableCell>
                <TableCell>{log.user}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>{log.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );

  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h4">Reports & Analytics</Typography>
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
              onClick={downloadReport}
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
              <MenuItem value="year">Last Year</MenuItem>
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
              <MenuItem value="overview">Overview</MenuItem>
              <MenuItem value="programs">Programs</MenuItem>
              <MenuItem value="users">Users</MenuItem>
              <MenuItem value="activities">Activities</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {reportType === 'overview' && renderOverviewReport()}
      {reportType === 'activities' && renderActivityLog()}
    </Box>
  );
};

export default Reports; 