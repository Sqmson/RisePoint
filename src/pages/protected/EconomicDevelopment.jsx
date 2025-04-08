import { useState } from 'react';
import {
  Grid, Paper, Typography, Box, Card, CardContent, CardMedia, Button,
  Stepper, Step, StepLabel, TextField, FormControl, InputLabel, Select, MenuItem,
  Dialog, DialogTitle, DialogContent, DialogActions, Alert
} from '@mui/material';
import {
  Business as BusinessIcon,
  AccountBalance as FinanceIcon,
  School as TrainingIcon,
} from '@mui/icons-material';

const EconomicDevelopment = () => {
  const [openApplication, setOpenApplication] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [applicationData, setApplicationData] = useState({
    programType: '',
    businessName: '',
    businessType: '',
    experience: '',
    goals: '',
    fundingNeeded: '',
    timeline: '',
    impact: '',
  });

  const programs = [
    {
      title: 'Business Incubation Program',
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      description: 'Comprehensive support for startups and small businesses',
      benefits: [
        'Mentorship from experienced entrepreneurs',
        'Office space and resources',
        'Networking opportunities',
        'Seed funding opportunities',
      ],
      duration: '6 months',
      image: '/images/business-incubation.jpg',
    },
    {
      title: 'Microfinance Access Initiative',
      icon: <FinanceIcon sx={{ fontSize: 40 }} />,
      description: 'Financial support for small businesses and entrepreneurs',
      benefits: [
        'Low-interest loans',
        'Financial literacy training',
        'Credit building support',
        'Business planning assistance',
      ],
      duration: '12 months',
      image: '/images/microfinance.jpg',
    },
    {
      title: 'Skills Development Program',
      icon: <TrainingIcon sx={{ fontSize: 40 }} />,
      description: 'Professional skills training for business success',
      benefits: [
        'Industry-specific training',
        'Certification programs',
        'Hands-on workshops',
        'Job placement support',
      ],
      duration: '3 months',
      image: '/images/skills-training.jpg',
    },
  ];

  const applicationSteps = [
    'Program Selection',
    'Business Information',
    'Goals & Timeline',
    'Review & Submit',
  ];

  const handleApplicationChange = (field) => (event) => {
    setApplicationData({
      ...applicationData,
      [field]: event.target.value,
    });
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    // Handle application submission
    console.log('Application submitted:', applicationData);
    setOpenApplication(false);
    setActiveStep(0);
  };

  const renderApplicationStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <FormControl fullWidth>
            <InputLabel>Program Type</InputLabel>
            <Select
              value={applicationData.programType}
              onChange={handleApplicationChange('programType')}
            >
              {programs.map((program) => (
                <MenuItem key={program.title} value={program.title}>
                  {program.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      case 1:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Business Name"
              value={applicationData.businessName}
              onChange={handleApplicationChange('businessName')}
              fullWidth
            />
            <TextField
              label="Business Type"
              value={applicationData.businessType}
              onChange={handleApplicationChange('businessType')}
              fullWidth
            />
            <TextField
              label="Years of Experience"
              value={applicationData.experience}
              onChange={handleApplicationChange('experience')}
              fullWidth
            />
          </Box>
        );
      case 2:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Business Goals"
              value={applicationData.goals}
              onChange={handleApplicationChange('goals')}
              multiline
              rows={4}
              fullWidth
            />
            <TextField
              label="Funding Needed"
              value={applicationData.fundingNeeded}
              onChange={handleApplicationChange('fundingNeeded')}
              fullWidth
            />
            <TextField
              label="Expected Timeline"
              value={applicationData.timeline}
              onChange={handleApplicationChange('timeline')}
              fullWidth
            />
          </Box>
        );
      case 3:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Application Summary
            </Typography>
            {Object.entries(applicationData).map(([key, value]) => (
              <Typography key={key}>
                <strong>{key}:</strong> {value}
              </Typography>
            ))}
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Economic Development Programs
      </Typography>

      <Grid container spacing={3}>
        {/* Program Cards */}
        {programs.map((program) => (
          <Grid item xs={12} md={4} key={program.title}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="div"
                sx={{
                  height: 140,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'primary.light',
                }}
              >
                {program.icon}
              </CardMedia>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {program.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {program.description}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Benefits:
                </Typography>
                <ul>
                  {program.benefits.map((benefit) => (
                    <li key={benefit}>
                      <Typography variant="body2">{benefit}</Typography>
                    </li>
                  ))}
                </ul>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Duration: {program.duration}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={() => setOpenApplication(true)}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Application Dialog */}
      <Dialog
        open={openApplication}
        onClose={() => setOpenApplication(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Program Application</DialogTitle>
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
          <Button onClick={() => setOpenApplication(false)}>Cancel</Button>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          {activeStep === applicationSteps.length - 1 ? (
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          ) : (
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default EconomicDevelopment; 