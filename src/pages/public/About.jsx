import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  Avatar, 
  Paper,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  CheckCircle as CheckIcon,
  LocationOn as LocationIcon,
  Business as BusinessIcon,
  Groups as TeamIcon,
  Timeline as TimelineIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';

const About = () => {
  const teamMembers = [
    {
      name: 'Namatovu Christine',
      role: 'Executive Director',
      image: '/images/tina.jpg',
      bio: 'Over 10 years of experience in community development and social entrepreneurship.',
    },
    {
      name: 'Murungika Allan',
      role: 'Program Director',
      image: '/images/team/allan.jpg',
      bio: 'Expert in agricultural development and sustainable farming practices.',
    },
    {
      name: 'Ainebyoona Faith',
      role: 'Community Relations Manager',
      image: '/images/faith.jpg',
      bio: 'Specialist in community engagement and program implementation.',
    },
  ];

  const partners = [
    {
      name: 'Uganda Development Bank',
      type: 'Financial Partner',
      logo: '/images/partners/udb.png',
      description: 'Supporting sustainable development initiatives across Uganda.',
    },
    {
      name: 'Ministry of Agriculture',
      type: 'Government Partner',
      logo: '/images/partners/maaif.png',
      description: 'Collaborating on agricultural development programs.',
    },
    {
      name: 'Digital Skills Foundation',
      type: 'Technology Partner',
      logo: '/images/partners/dsf.png',
      description: 'Providing digital literacy and skills training.',
    },
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Foundation Established',
      description: 'RisePoint was founded with a vision to transform communities.',
    },
    {
      year: '2021',
      title: 'First Programs Launched',
      description: 'Successfully initiated agricultural and business development programs.',
    },
    {
      year: '2022',
      title: 'Regional Expansion',
      description: 'Extended operations to multiple districts across Uganda.',
    },
    {
      year: '2023',
      title: 'Digital Innovation',
      description: 'Launched digital skills training and online resources platform.',
    },
  ];

  return (
    <Container maxWidth="lg">
      {/* Our Story */}
      <Box sx={{ my: 6 }}>
        <Typography variant="h3" gutterBottom>
          Our Story
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              Founded in 2020, RisePoint emerged from a vision to transform how communities
              approach sustainable development. We recognized the need for integrated
              support systems that combine financial resources, skills training, and
              community engagement.
            </Typography>
            <Typography variant="body1" paragraph>
              Our approach focuses on empowering individuals and communities with the
              tools, knowledge, and resources they need to create sustainable
              livelihoods and build resilient local economies.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3, bgcolor: 'primary.light' }}>
              <List>
                {['Community-Driven Development', 'Sustainable Solutions', 'Innovation & Technology', 'Local Empowerment'].map((value) => (
                  <ListItem key={value}>
                    <ListItemIcon>
                      <CheckIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={value} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Team Section */}
      <Box sx={{ my: 8 }}>
        <Typography variant="h4" gutterBottom>
          Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      src={member.image}
                      sx={{ width: 120, height: 120, mb: 2 }}
                    />
                    <Typography variant="h6" align="center">
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" align="center">
                      {member.role}
                    </Typography>
                  </Box>
                  <Typography variant="body2" align="center">
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Milestones */}
      <Box sx={{ my: 8 }}>
        <Typography variant="h4" gutterBottom>
          Our Journey
        </Typography>
        <Grid container spacing={3}>
          {milestones.map((milestone) => (
            <Grid item xs={12} sm={6} md={3} key={milestone.year}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <TimelineIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="div">
                      {milestone.year}
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" gutterBottom>
                    {milestone.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {milestone.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Partners */}
      <Box sx={{ my: 8 }}>
        <Typography variant="h4" gutterBottom>
          Our Partners
        </Typography>
        <Grid container spacing={4}>
          {partners.map((partner) => (
            <Grid item xs={12} sm={6} md={4} key={partner.name}>
              <Paper sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <BusinessIcon color="primary" sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="h6">
                      {partner.name}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {partner.type}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2">
                  {partner.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Impact Reports */}
      <Box sx={{ my: 8 }}>
        <Typography variant="h4" gutterBottom>
          Impact Reports
        </Typography>
        <Grid container spacing={3}>
          {[2023, 2022, 2021].map((year) => (
            <Grid item xs={12} md={4} key={year}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    Annual Impact Report {year}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2, mb: 3 }}>
                    View our comprehensive impact assessment and success stories
                    from {year}.
                  </Typography>
                  <Button
                    variant="outlined"
                    startIcon={<DownloadIcon />}
                    fullWidth
                  >
                    Download Report
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default About; 