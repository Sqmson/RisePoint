import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  CardMedia,
  Button,
  Chip,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';
import { useState } from 'react';
import {
  Business as BusinessIcon,
  Agriculture as AgricultureIcon,
  School as EducationIcon,
  CheckCircle as CheckIcon,
  Schedule as ScheduleIcon,
  LocationOn as LocationIcon,
  AttachMoney as MoneyIcon,
  Group as GroupIcon,
} from '@mui/icons-material';

const Programs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const programCategories = [
    {
      title: 'Economic Empowerment',
      icon: <BusinessIcon />,
      programs: [
        {
          id: 1,
          title: 'Business Incubation Program',
          description: 'Comprehensive support for startups and small businesses',
          image: '/images/programs/business-incubation.jpg',
          duration: '6 months',
          location: 'Kampala',
          cost: 'Subsidized',
          capacity: '50 participants',
          benefits: [
            'Business plan development',
            'Mentorship from experts',
            'Access to funding opportunities',
            'Market linkages',
          ],
          requirements: [
            'Basic business concept',
            'Commitment to full program',
            'Uganda resident',
            'Age 18-45',
          ],
        },
        {
          id: 2,
          title: 'Financial Literacy Training',
          description: 'Essential financial management skills for entrepreneurs',
          image: '/images/programs/financial-literacy.jpg',
          duration: '3 months',
          location: 'Multiple locations',
          cost: 'Free',
          capacity: '100 participants',
          benefits: [
            'Personal finance management',
            'Business accounting basics',
            'Investment strategies',
            'Risk management',
          ],
          requirements: [
            'Basic literacy',
            'Own or planning to start business',
            'Uganda resident',
          ],
        },
      ],
    },
    {
      title: 'Agricultural Development',
      icon: <AgricultureIcon />,
      programs: [
        {
          id: 3,
          title: 'Modern Farming Techniques',
          description: 'Sustainable agriculture practices and technology',
          image: '/images/programs/modern-farming.jpg',
          duration: '4 months',
          location: 'Rural districts',
          cost: 'Subsidized',
          capacity: '75 participants',
          benefits: [
            'Advanced farming methods',
            'Irrigation techniques',
            'Pest management',
            'Post-harvest handling',
          ],
          requirements: [
            'Access to farmland',
            'Basic farming experience',
            'Commitment to implementation',
          ],
        },
      ],
    },
    {
      title: 'Education & Skills',
      icon: <EducationIcon />,
      programs: [
        {
          id: 4,
          title: 'Digital Skills Bootcamp',
          description: 'Intensive training in digital literacy and technology',
          image: '/images/programs/digital-skills.jpg',
          duration: '3 months',
          location: 'Online/Hybrid',
          cost: 'Free',
          capacity: '200 participants',
          benefits: [
            'Computer basics',
            'Digital marketing',
            'Online business',
            'E-commerce',
          ],
          requirements: [
            'Basic computer access',
            'Internet connectivity',
            'Dedication to learning',
          ],
        },
      ],
    },
  ];

  const applicationSteps = [
    'Basic Information',
    'Program Selection',
    'Requirements Check',
    'Submit Application',
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
    setOpenDialog(true);
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setActiveStep(0);
  };

  const renderApplicationStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                required
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              {selectedProgram?.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {selectedProgram?.description}
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><ScheduleIcon /></ListItemIcon>
                <ListItemText primary={`Duration: ${selectedProgram?.duration}`} />
              </ListItem>
              <ListItem>
                <ListItemIcon><LocationIcon /></ListItemIcon>
                <ListItemText primary={`Location: ${selectedProgram?.location}`} />
              </ListItem>
              <ListItem>
                <ListItemIcon><MoneyIcon /></ListItemIcon>
                <ListItemText primary={`Cost: ${selectedProgram?.cost}`} />
              </ListItem>
            </List>
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Program Requirements:
            </Typography>
            <List>
              {selectedProgram?.requirements.map((req, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={req} />
                </ListItem>
              ))}
            </List>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="How do you meet these requirements?"
              sx={{ mt: 2 }}
            />
          </Box>
        );
      case 3:
        return (
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Review your application
            </Typography>
            <Typography variant="body2" paragraph>
              Please review your application details before submitting.
              By submitting this application, you confirm that all provided
              information is accurate.
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Additional Comments"
              sx={{ mt: 2 }}
            />
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" gutterBottom>
          Our Programs
        </Typography>
        <Typography variant="body1" paragraph>
          Explore our comprehensive range of programs designed to empower
          individuals and communities through sustainable development initiatives.
        </Typography>

        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{ mb: 4 }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {programCategories.map((category, index) => (
            <Tab
              key={index}
              icon={category.icon}
              label={category.title}
              iconPosition="start"
            />
          ))}
        </Tabs>

        <Grid container spacing={4}>
          {programCategories[activeTab].programs.map((program) => (
            <Grid item xs={12} md={6} key={program.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={program.image}
                  alt={program.title}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {program.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {program.description}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Chip
                      icon={<ScheduleIcon />}
                      label={program.duration}
                      sx={{ mr: 1, mb: 1 }}
                    />
                    <Chip
                      icon={<LocationIcon />}
                      label={program.location}
                      sx={{ mr: 1, mb: 1 }}
                    />
                    <Chip
                      icon={<GroupIcon />}
                      label={program.capacity}
                      sx={{ mb: 1 }}
                    />
                  </Box>

                  <Typography variant="subtitle2" gutterBottom>
                    Key Benefits:
                  </Typography>
                  <List dense>
                    {program.benefits.map((benefit, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={benefit} />
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleProgramClick(program)}
                    sx={{ mt: 2 }}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog
        open={openDialog}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          Program Application
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
              {applicationSteps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {renderApplicationStep()}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          {activeStep === applicationSteps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleClose}
            >
              Submit Application
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
            >
              Next
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Programs; 