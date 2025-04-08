import { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Chip,
  Alert,
} from '@mui/material';
import {
  Support as SupportIcon,
  Warning as EmergencyIcon,
  People as CommunityIcon,
  Book as ResourceIcon,
  Message as MessageIcon,
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material';

const SupportPage = () => {
  const [openMentorDialog, setOpenMentorDialog] = useState(false);
  const [openEmergencyDialog, setOpenEmergencyDialog] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      expertise: ['Business Development', 'Financial Planning'],
      experience: '15+ years',
      availability: 'Mon-Wed',
      bio: 'Expert in small business development and financial planning...',
      image: '/images/mentors/sarah.jpg',
    },
    // Add more mentors...
  ];

  const emergencyServices = [
    {
      title: 'Crisis Support',
      description: '24/7 emergency assistance for urgent needs',
      contact: '+256 800-123-456',
      type: 'Immediate',
    },
    {
      title: 'Medical Emergency',
      description: 'Access to medical care and support',
      contact: '+256 800-789-012',
      type: 'Healthcare',
    },
    // Add more services...
  ];

  const resources = [
    {
      title: 'Business Planning Guide',
      type: 'Document',
      format: 'PDF',
      size: '2.5 MB',
      downloads: 156,
    },
    {
      title: 'Financial Management Course',
      type: 'Video Series',
      duration: '6 hours',
      modules: 12,
      enrolled: 89,
    },
    // Add more resources...
  ];

  const communityEvents = [
    {
      title: 'Monthly Networking Meet',
      date: '2024-03-01',
      time: '14:00',
      location: 'Community Center',
      participants: 45,
    },
    // Add more events...
  ];

  const renderMentorship = () => (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        Mentorship Program
      </Typography>
      <Typography variant="body1" paragraph>
        Connect with experienced mentors who can guide you through your journey.
      </Typography>
      
      <Grid container spacing={3}>
        {mentors.map((mentor) => (
          <Grid item xs={12} md={6} key={mentor.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Avatar
                    src={mentor.image}
                    sx={{ width: 80, height: 80 }}
                  />
                  <Box>
                    <Typography variant="h6">{mentor.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {mentor.experience} experience
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="subtitle2" gutterBottom>
                  Expertise:
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {mentor.expertise.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>

                <Typography variant="body2" paragraph>
                  {mentor.bio}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Available: {mentor.availability}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    setSelectedMentor(mentor);
                    setOpenMentorDialog(true);
                  }}
                >
                  Request Mentorship
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );

  const renderEmergencySupport = () => (
    <Paper sx={{ p: 3, mb: 3, bgcolor: 'error.light' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <EmergencyIcon color="error" sx={{ fontSize: 40 }} />
        <Typography variant="h5" color="error.dark">
          Emergency Support
        </Typography>
      </Box>

      <Alert severity="info" sx={{ mb: 3 }}>
        For immediate assistance, please contact our 24/7 emergency hotline.
      </Alert>

      <Grid container spacing={3}>
        {emergencyServices.map((service) => (
          <Grid item xs={12} sm={6} key={service.title}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" paragraph>
                  {service.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon color="error" />
                  <Typography variant="h6" color="error.main">
                    {service.contact}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  onClick={() => setOpenEmergencyDialog(true)}
                >
                  Request Emergency Support
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );

  const renderResources = () => (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" gutterBottom>
        Resource Center
      </Typography>
      <Grid container spacing={3}>
        {resources.map((resource) => (
          <Grid item xs={12} sm={6} md={4} key={resource.title}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {resource.title}
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <ResourceIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={resource.type}
                      secondary={resource.format || resource.duration}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        resource.downloads
                          ? `${resource.downloads} downloads`
                          : `${resource.enrolled} enrolled`
                      }
                    />
                  </ListItem>
                </List>
              </CardContent>
              <CardActions>
                <Button variant="outlined" fullWidth>
                  {resource.type === 'Document' ? 'Download' : 'Access Course'}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );

  const renderCommunityEvents = () => (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Community Events
      </Typography>
      <Grid container spacing={3}>
        {communityEvents.map((event) => (
          <Grid item xs={12} sm={6} key={event.title}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {event.title}
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon>
                      <CalendarIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${event.date} at ${event.time}`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LocationIcon />
                    </ListItemIcon>
                    <ListItemText primary={event.location} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CommunityIcon />
                    </ListItemIcon>
                    <ListItemText primary={`${event.participants} participants`} />
                  </ListItem>
                </List>
              </CardContent>
              <CardActions>
                <Button variant="contained" fullWidth>
                  Join Event
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Support Services
      </Typography>

      {renderEmergencySupport()}
      {renderMentorship()}
      {renderResources()}
      {renderCommunityEvents()}

      {/* Mentorship Request Dialog */}
      <Dialog
        open={openMentorDialog}
        onClose={() => setOpenMentorDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Request Mentorship</DialogTitle>
        <DialogContent>
          <Box sx={{ p: 2 }}>
            <TextField
              fullWidth
              label="Your Goals"
              multiline
              rows={4}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Preferred Schedule"
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Additional Notes"
              multiline
              rows={2}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenMentorDialog(false)}>Cancel</Button>
          <Button variant="contained">Submit Request</Button>
        </DialogActions>
      </Dialog>

      {/* Emergency Support Dialog */}
      <Dialog
        open={openEmergencyDialog}
        onClose={() => setOpenEmergencyDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Emergency Support Request</DialogTitle>
        <DialogContent>
          <Box sx={{ p: 2 }}>
            <Alert severity="warning" sx={{ mb: 2 }}>
              For life-threatening emergencies, please call emergency services immediately.
            </Alert>
            <TextField
              fullWidth
              label="Nature of Emergency"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Contact Number"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Current Location"
              required
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Additional Details"
              multiline
              rows={3}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEmergencyDialog(false)}>Cancel</Button>
          <Button variant="contained" color="error">
            Submit Emergency Request
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default SupportPage; 