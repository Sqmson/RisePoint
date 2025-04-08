import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Stack,
} from '@mui/material';
import {
  Event as EventIcon,
  AccessTime as TimeIcon,
  LocationOn as LocationIcon,
  Person as PersonIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from '@mui/icons-material';

const ProgramSchedule = () => {
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      program: 'Business Incubation',
      date: '2024-03-20',
      time: '09:00 AM',
      location: 'Training Room A',
      instructor: 'Dr. James Wilson',
      status: 'upcoming',
      participants: 15,
    },
    {
      id: 2,
      program: 'Digital Skills Workshop',
      date: '2024-03-22',
      time: '02:00 PM',
      location: 'Computer Lab',
      instructor: 'Sarah Miller',
      status: 'active',
      participants: 20,
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleAdd = () => {
    setSelectedSchedule({
      program: '',
      date: '',
      time: '',
      location: '',
      instructor: '',
      status: 'upcoming',
      participants: 0,
    });
    setEditMode(false);
    setOpenDialog(true);
  };

  const handleEdit = (schedule) => {
    setSelectedSchedule(schedule);
    setEditMode(true);
    setOpenDialog(true);
  };

  const handleDelete = (scheduleId) => {
    if (window.confirm('Are you sure you want to delete this schedule?')) {
      setSchedules(schedules.filter(schedule => schedule.id !== scheduleId));
    }
  };

  const handleSave = () => {
    if (editMode) {
      setSchedules(schedules.map(schedule =>
        schedule.id === selectedSchedule.id ? selectedSchedule : schedule
      ));
    } else {
      setSchedules([...schedules, { ...selectedSchedule, id: schedules.length + 1 }]);
    }
    setOpenDialog(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'success';
      case 'upcoming': return 'info';
      case 'completed': return 'default';
      case 'cancelled': return 'error';
      default: return 'default';
    }
  };

  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Program Schedule
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAdd}
        >
          Add Schedule
        </Button>
      </Box>

      <Grid container spacing={3}>
        {schedules.map((schedule) => (
          <Grid item xs={12} md={6} key={schedule.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6">{schedule.program}</Typography>
                  <Chip
                    label={schedule.status}
                    color={getStatusColor(schedule.status)}
                    size="small"
                  />
                </Box>

                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EventIcon color="action" />
                    <Typography>{schedule.date}</Typography>
                    <TimeIcon color="action" sx={{ ml: 2 }} />
                    <Typography>{schedule.time}</Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationIcon color="action" />
                    <Typography>{schedule.location}</Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PersonIcon color="action" />
                    <Typography>{schedule.instructor}</Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary">
                    Participants: {schedule.participants}
                  </Typography>
                </Stack>
              </CardContent>

              <CardActions>
                <Button
                  size="small"
                  startIcon={<EditIcon />}
                  onClick={() => handleEdit(schedule)}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(schedule.id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {editMode ? 'Edit Schedule' : 'Add New Schedule'}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Program Name"
                  value={selectedSchedule?.program || ''}
                  onChange={(e) => setSelectedSchedule({
                    ...selectedSchedule,
                    program: e.target.value
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Date"
                  type="date"
                  value={selectedSchedule?.date || ''}
                  onChange={(e) => setSelectedSchedule({
                    ...selectedSchedule,
                    date: e.target.value
                  })}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Time"
                  type="time"
                  value={selectedSchedule?.time || ''}
                  onChange={(e) => setSelectedSchedule({
                    ...selectedSchedule,
                    time: e.target.value
                  })}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Location"
                  value={selectedSchedule?.location || ''}
                  onChange={(e) => setSelectedSchedule({
                    ...selectedSchedule,
                    location: e.target.value
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Instructor"
                  value={selectedSchedule?.instructor || ''}
                  onChange={(e) => setSelectedSchedule({
                    ...selectedSchedule,
                    instructor: e.target.value
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={selectedSchedule?.status || 'upcoming'}
                    onChange={(e) => setSelectedSchedule({
                      ...selectedSchedule,
                      status: e.target.value
                    })}
                  >
                    <MenuItem value="upcoming">Upcoming</MenuItem>
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="cancelled">Cancelled</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Participants"
                  type="number"
                  value={selectedSchedule?.participants || ''}
                  onChange={(e) => setSelectedSchedule({
                    ...selectedSchedule,
                    participants: parseInt(e.target.value, 10)
                  })}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProgramSchedule; 