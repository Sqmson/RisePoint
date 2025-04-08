import React from 'react';
import { 
  Box, Container, Grid, Typography, Card, CardContent, 
  Button, Paper, Stack, LinearProgress, CardMedia, Divider,
  List, ListItem, ListItemIcon, ListItemText,
  Accordion, AccordionSummary, AccordionDetails,
  Avatar, Chip,
  Fade, Grow,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  TrendingUp,
  People,
  Agriculture,
  School,
  Warning as EmergencyIcon,
  Business,
  ExpandMore,
  CheckCircle,
  Timeline,
  EmojiObjects,
  Handshake,
  LocalLibrary,
  AccountBalance,
  Phone,
  Chat,
  LocationOn,
} from '@mui/icons-material';
import { TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import TestimonialsCarousel from '../../components/common/TestimonialsCarousel';
import NewsBlog from '../../components/common/NewsBlog';

const imagePaths = {
  '/images/hero-bg.jpg': 'https://source.unsplash.com/1600x900/?community',
  '/images/programs/business.jpg': 'https://source.unsplash.com/800x600/?business',
  '/images/programs/agriculture.jpg': 'https://source.unsplash.com/800x600/?farming',
  '/images/programs/education.jpg': 'https://source.unsplash.com/800x600/?education',
};

const Home = () => {
  const sdgGoals = [
    "No Poverty",
    "Zero Hunger",
    "Quality Education",
    "Decent Work and Economic Growth",
    "Sustainable Communities",
  ];

  const impactStats = [
    { label: 'Lives Impacted', value: '10,000+', icon: <People />, color: '#2563eb' },
    { label: 'Active Programs', value: '25+', icon: <Business />, color: '#7c3aed' },
    { label: 'Success Rate', value: '85%', icon: <TrendingUp />, color: '#059669' },
    { label: 'Communities', value: '50+', icon: <Handshake />, color: '#dc2626' },
  ];

  const featuredPrograms = [
    {
      title: 'Business Development',
      description: 'Comprehensive support for entrepreneurs and small businesses',
      image: 'https://source.unsplash.com/800x600/?business',
      icon: <Business sx={{ fontSize: 40 }} />,
      benefits: ['Mentorship', 'Funding Access', 'Network Building'],
    },
    {
      title: 'Agricultural Innovation',
      description: 'Modern farming techniques and sustainable practices',
      image: 'https://source.unsplash.com/800x600/?farming',
      icon: <Agriculture sx={{ fontSize: 40 }} />,
      benefits: ['Technical Training', 'Market Access', 'Resource Support'],
    },
    {
      title: 'Skills Training',
      description: 'Professional development and vocational training',
      image: 'https://source.unsplash.com/800x600/?education',
      icon: <School sx={{ fontSize: 40 }} />,
      benefits: ['Certified Courses', 'Practical Experience', 'Job Placement'],
    },
  ];

  const successStories = [
    {
      name: 'Sarah Johnson',
      program: 'Business Incubation',
      story: 'Launched a successful eco-friendly product line with our support',
      image: 'https://source.unsplash.com/200x200/?woman',
    },
    {
      name: 'Michael Chen',
      program: 'Agricultural Innovation',
      story: 'Transformed traditional farm into a modern sustainable operation',
      image: 'https://source.unsplash.com/200x200/?man',
    },
  ];

  const upcomingEvents = [
    {
      title: "Entrepreneurship Workshop",
      date: "2024-04-15",
      location: "Community Center",
      type: "Workshop",
    },
    {
      title: "Agricultural Tech Expo",
      date: "2024-04-20",
      location: "Innovation Hub",
      type: "Exhibition",
    },
  ];

  const testimonials = [
    {
      text: "RisePoint's business incubation program transformed my small bakery into a thriving enterprise.",
      name: "Sarah Johnson",
      role: "Business Owner",
      rating: 5,
      avatar: "https://source.unsplash.com/random/100x100/?woman",
    },
  ];

  const blogPosts = [
    {
      title: "Empowering Rural Communities Through Technology",
      excerpt: "How digital literacy programs are transforming rural economies...",
      image: "https://source.unsplash.com/random/800x600/?technology",
      date: "2024-03-15",
      categories: ["Technology", "Rural Development"],
    },
  ];

  const renderMissionVision = () => (
    <Box sx={{ my: 8 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            To create lasting positive change in communities by providing accessible
            tools, resources, and opportunities for sustainable development and
            poverty alleviation.
          </Typography>
          <List>
            {sdgGoals.map((goal) => (
              <ListItem key={goal}>
                <ListItemIcon>
                  <CheckCircle color="primary" />
                </ListItemIcon>
                <ListItemText primary={goal} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Our Vision
          </Typography>
          <Typography variant="body1" paragraph>
            A world where every community has the resources and support needed to
            thrive and create sustainable economic opportunities for all members.
          </Typography>
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Strategic Goals
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Timeline color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Sustainable Development"
                    secondary="Aligning with UN SDGs for maximum impact"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmojiObjects color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Innovation & Technology"
                    secondary="Leveraging modern solutions for community development"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Handshake color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Community Partnerships"
                    secondary="Building strong networks for sustainable growth"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderSuccessStories = () => (
    <Box sx={{ my: 8 }}>
      <Grow in timeout={1000}>
        <div>
          <Typography variant="h4" gutterBottom align="center">
            Success Stories
          </Typography>
          <Timeline position="alternate">
            {successStories.map((story, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Fade in timeout={1000}>
                    <Card>
                      <CardContent>
                        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                          <Avatar src={story.image} sx={{ width: 60, height: 60 }} />
                          <Box>
                            <Typography variant="h6">{story.name}</Typography>
                            <Typography variant="caption" color="text.secondary">
                              {story.program}
                            </Typography>
                          </Box>
                        </Box>
                        <Typography>{story.story}</Typography>
                      </CardContent>
                    </Card>
                  </Fade>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </Grow>
    </Box>
  );

  const renderUpcomingEvents = () => (
    <Box sx={{ my: 8 }}>
      <Grow in timeout={1000}>
        <div>
          <Typography variant="h4" gutterBottom align="center">
            Upcoming Events
          </Typography>
          <Grid container spacing={3}>
            {upcomingEvents.map((event, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Fade in timeout={1000}>
                  <Card sx={{ display: 'flex', height: '100%' }}>
                    <CardContent sx={{ flex: 1 }}>
                      <Typography variant="h6" gutterBottom>
                        {event.title}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
                        <Chip 
                          label={new Date(event.date).toLocaleDateString()}
                          size="small"
                          color="primary"
                        />
                        <Chip 
                          label={event.type}
                          size="small"
                          variant="outlined"
                        />
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {event.location}
                      </Typography>
                    </CardContent>
                    <Button sx={{ alignSelf: 'center', mr: 2 }}>
                      Learn More
                    </Button>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </div>
      </Grow>
    </Box>
  );

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(37, 99, 235, 0.9), rgba(37, 99, 235, 0.7)), url(https://source.unsplash.com/1600x900/?community)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" gutterBottom fontWeight="bold">
            Empowering Communities
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
            Building sustainable futures through education, economic development, and agricultural innovation
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={RouterLink}
              to="/register"
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              component={RouterLink}
              to="/about"
            >
              Learn More
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <div>
            {renderMissionVision()}
          </div>
        </Fade>

        {/* Impact Statistics */}
        <Grow in timeout={1000}>
          <div>
            <Box sx={{ my: 8 }}>
              <Typography variant="h4" align="center" gutterBottom>
                Our Impact
              </Typography>
              <Grid container spacing={4} sx={{ mt: 2 }}>
                {impactStats.map((stat) => (
                  <Grid item xs={12} sm={6} md={3} key={stat.label}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 2,
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 56,
                          height: 56,
                          bgcolor: stat.color,
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        {stat.icon}
                      </Avatar>
                      <Typography variant="h4" gutterBottom fontWeight="bold">
                        {stat.value}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {stat.label}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        </Grow>

        {/* Featured Programs */}
        <Grow in timeout={1000}>
          <div>
            <Box sx={{ my: 8 }}>
              <Typography variant="h4" gutterBottom>
                Featured Programs
              </Typography>
              <Grid container spacing={2}>
                {featuredPrograms.map((program) => (
                  <Grid item xs={12} sm={6} md={4} key={program.title}>
                    <Card sx={{ height: '100%' }}>
                      <CardMedia
                        component="img"
                        height="160"
                        image={program.image}
                        alt={program.title}
                      />
                      <CardContent sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Box sx={{ color: 'primary.main', mr: 1 }}>
                            {program.icon}
                          </Box>
                          <Typography variant="h6" component="div">
                            {program.title}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {program.description}
                        </Typography>
                        <List dense sx={{ py: 0 }}>
                          {program.benefits.map((benefit) => (
                            <ListItem key={benefit} sx={{ px: 1 }}>
                              <ListItemIcon sx={{ minWidth: 36 }}>
                                <CheckCircle color="primary" fontSize="small" />
                              </ListItemIcon>
                              <ListItemText 
                                primary={benefit}
                                primaryTypographyProps={{ variant: 'body2' }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        </Grow>

        {/* Add new sections */}
        <Grow in timeout={1000}>
          <div>
            {renderSuccessStories()}
          </div>
        </Grow>

        <Grow in timeout={1000}>
          <div>
            {renderUpcomingEvents()}
          </div>
        </Grow>

        {/* Testimonials Section */}
        <Grow in timeout={1000}>
          <div>
            <Box sx={{ my: 8 }}>
              <Typography variant="h4" align="center" gutterBottom>
                Community Voices
              </Typography>
              <TestimonialsCarousel testimonials={testimonials} />
            </Box>
          </div>
        </Grow>

        {/* News & Blog Section */}
        <Grow in timeout={1000}>
          <div>
            <Box sx={{ my: 8 }}>
              <Typography variant="h4" gutterBottom>
                Latest News & Stories
              </Typography>
              <NewsBlog posts={blogPosts} />
            </Box>
          </div>
        </Grow>

        {/* Enhanced Emergency Support Section */}
        <Grow in timeout={1000}>
          <div>
            <Box sx={{ my: 8 }}>
              <Paper 
                sx={{ 
                  p: 4, 
                  bgcolor: 'error.light',
                  backgroundImage: 'linear-gradient(45deg, rgba(255,0,0,0.1) 0%, rgba(255,0,0,0) 100%)',
                }}
              >
                <Grid container spacing={4}>
                  <Grid item xs={12} md={4}>
                    <Button
                      variant="contained"
                      color="error"
                      size="large"
                      fullWidth
                      startIcon={<Phone />}
                      href="tel:+1234567890"
                    >
                      Emergency Hotline
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Button
                      variant="contained"
                      color="error"
                      size="large"
                      fullWidth
                      startIcon={<Chat />}
                    >
                      Live Chat Support
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Button
                      variant="contained"
                      color="error"
                      size="large"
                      fullWidth
                      startIcon={<LocationOn />}
                    >
                      Find Nearest Center
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </div>
        </Grow>

        {/* Call to Action */}
        <Grow in timeout={1000}>
          <div>
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h4" gutterBottom>
                Ready to Start Your Journey?
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" paragraph>
                Join our community and access life-changing opportunities
              </Typography>
              <Button
                variant="contained"
                size="large"
                component={RouterLink}
                to="/register"
              >
                Register Now
              </Button>
            </Box>
          </div>
        </Grow>
      </Container>
    </Box>
  );
};

export default Home; 