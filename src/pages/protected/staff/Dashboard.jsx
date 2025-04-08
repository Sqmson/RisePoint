import { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Chip,
} from '@mui/material';
import {
  Assignment as AssignmentIcon,
  Schedule as ScheduleIcon,
  People as PeopleIcon,
  Flag as FlagIcon,
} from '@mui/icons-material';

const StaffDashboard = () => {
  const [tasks] = useState([
    {
      id: 1,
      title: 'Review Application #123',
      priority: 'High',
      due: '2024-03-20',
    },
    {
      id: 2,
      title: 'Update Program Schedule',
      priority: 'Medium',
      due: '2024-03-22',
    },
    {
      id: 3,
      title: 'Contact Applicant',
      priority: 'Low',
      due: '2024-03-25',
    },
  ]);

  const [stats] = useState({
    pendingReviews: 12,
    todayMeetings: 3,
    activeParticipants: 156,
    completedTasks: 45,
  });

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'error';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'default';
    }
  };

  return (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Staff Dashboard
      </Typography>

      {/* Stats Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AssignmentIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Pending Reviews</Typography>
              </Box>
              <Typography variant="h4">{stats.pendingReviews}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <ScheduleIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Today's Meetings</Typography>
              </Box>
              <Typography variant="h4">{stats.todayMeetings}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PeopleIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">Active Participants</Typography>
              </Box>
              <Typography variant="h4">{stats.activeParticipants}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FlagIcon color="success" sx={{ mr: 1 }} />
                <Typography variant="h6">Completed Tasks</Typography>
              </Box>
              <Typography variant="h4">{stats.completedTasks}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Tasks and Schedule */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Pending Tasks
            </Typography>
            <List>
              {tasks.map((task) => (
                <ListItem key={task.id}>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={task.title}
                    secondary={`Due: ${task.due}`}
                  />
                  <Chip
                    label={task.priority}
                    color={getPriorityColor(task.priority)}
                    size="small"
                  />
                </ListItem>
              ))}
            </List>
            <Button variant="text" fullWidth>
              View All Tasks
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Review Applications
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Update Schedule
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Generate Report
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Contact Support
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StaffDashboard; 