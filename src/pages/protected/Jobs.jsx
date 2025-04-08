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
  Chip,
  TextField,
  InputAdornment,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import {
  Search as SearchIcon,
  Work as WorkIcon,
  School as TrainingIcon,
  LocationOn as LocationIcon,
  Business as CompanyIcon,
  AttachMoney as SalaryIcon,
  Schedule as ScheduleIcon,
  Description as DescriptionIcon,
} from '@mui/icons-material';

const Jobs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const jobs = [
    {
      id: 1,
      title: 'Community Development Officer',
      company: 'RisePoint NGO',
      location: 'Kampala, Uganda',
      type: 'Full-time',
      salary: '$800-$1,200/month',
      description: 'Lead community development initiatives and program implementation...',
      requirements: [
        'Bachelor\'s degree in Social Sciences or related field',
        '3+ years experience in community development',
        'Strong leadership and communication skills',
      ],
      responsibilities: [
        'Develop and implement community programs',
        'Monitor and evaluate program impact',
        'Coordinate with stakeholders and partners',
      ],
      skills: ['Project Management', 'Community Outreach', 'Program Development'],
      postedDate: '2024-02-15',
    },
    // Add more job listings...
  ];

  const trainingPrograms = [
    {
      id: 1,
      title: 'Digital Skills Bootcamp',
      provider: 'Tech Academy',
      duration: '3 months',
      startDate: '2024-03-01',
      type: 'Online/Hybrid',
      certification: 'Digital Skills Certificate',
      description: 'Comprehensive training in digital literacy and tech skills...',
      modules: [
        'Computer Basics',
        'Digital Marketing',
        'Web Development Fundamentals',
      ],
    },
    // Add more training programs...
  ];

  const applications = [
    {
      id: 1,
      jobTitle: 'Community Development Officer',
      company: 'RisePoint NGO',
      status: 'Under Review',
      appliedDate: '2024-02-16',
      nextStep: 'Interview scheduled for 2024-02-20',
    },
    // Add more applications...
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleJobApplication = (job) => {
    setSelectedJob(job);
    setOpenDialog(true);
  };

  const handleApplicationSubmit = () => {
    // Handle application submission
    setOpenDialog(false);
  };

  const renderJobListings = () => (
    <Box>
      <TextField
        fullWidth
        placeholder="Search jobs by title, company, or location"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item xs={12} md={6} key={job.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6">{job.title}</Typography>
                  <Chip label={job.type} color="primary" size="small" />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <CompanyIcon sx={{ mr: 1 }} color="action" />
                  <Typography variant="body2">{job.company}</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationIcon sx={{ mr: 1 }} color="action" />
                  <Typography variant="body2">{job.location}</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SalaryIcon sx={{ mr: 1 }} color="action" />
                  <Typography variant="body2">{job.salary}</Typography>
                </Box>

                <Typography variant="subtitle2" gutterBottom>
                  Required Skills:
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {job.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleJobApplication(job)}
                >
                  Apply Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderTrainingPrograms = () => (
    <Grid container spacing={3}>
      {trainingPrograms.map((program) => (
        <Grid item xs={12} md={6} key={program.id}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {program.title}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <TrainingIcon sx={{ mr: 1 }} color="action" />
                <Typography variant="body2">{program.provider}</Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <ScheduleIcon sx={{ mr: 1 }} color="action" />
                <Typography variant="body2">
                  {program.duration} • Starts {program.startDate}
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary" paragraph>
                {program.description}
              </Typography>

              <Typography variant="subtitle2" gutterBottom>
                Modules:
              </Typography>
              <List dense>
                {program.modules.map((module) => (
                  <ListItem key={module}>
                    <ListItemIcon>
                      <DescriptionIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={module} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <CardActions>
              <Button variant="contained" fullWidth>
                Enroll Now
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  const renderApplications = () => (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Your Applications
      </Typography>
      <List>
        {applications.map((application) => (
          <Box key={application.id}>
            <ListItem>
              <ListItemIcon>
                <WorkIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary={application.jobTitle}
                secondary={
                  <Box>
                    <Typography variant="body2">
                      {application.company}
                    </Typography>
                    <Typography variant="caption" display="block">
                      Applied: {application.appliedDate}
                    </Typography>
                    <Chip
                      label={application.status}
                      color={application.status === 'Under Review' ? 'warning' : 'success'}
                      size="small"
                      sx={{ mt: 1 }}
                    />
                    {application.nextStep && (
                      <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                        Next Step: {application.nextStep}
                      </Typography>
                    )}
                  </Box>
                }
              />
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Paper>
  );

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Jobs & Opportunities
      </Typography>

      <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab icon={<WorkIcon />} label="Job Listings" />
        <Tab icon={<TrainingIcon />} label="Training Programs" />
        <Tab icon={<DescriptionIcon />} label="My Applications" />
      </Tabs>

      {activeTab === 0 && renderJobListings()}
      {activeTab === 1 && renderTrainingPrograms()}
      {activeTab === 2 && renderApplications()}

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
        <DialogContent>
          <Box sx={{ p: 2 }}>
            {/* Add application form fields here */}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleApplicationSubmit}>
            Submit Application
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Jobs; 