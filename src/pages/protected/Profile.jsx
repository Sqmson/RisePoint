import { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Avatar,
  Button,
  TextField,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Tab,
  Tabs,
  CircularProgress,
  Alert,
  IconButton,
  Stack,
} from '@mui/material';
import {
  Person as PersonIcon,
  School as EducationIcon,
  Work as WorkIcon,
  Assignment as CertificateIcon,
  Star as AchievementIcon,
  Timeline as ProgressIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  PhotoCamera as PhotoCameraIcon,
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    bio: user?.bio || '',
    education: user?.education || [],
    certifications: user?.certifications || [],
    skills: user?.skills || [],
    interests: user?.interests || [],
  });

  const programProgress = [
    {
      program: 'Business Incubation',
      progress: 75,
      startDate: '2024-01-15',
      completionDate: '2024-07-15',
      status: 'In Progress',
    },
    {
      program: 'Digital Skills Training',
      progress: 100,
      startDate: '2023-09-01',
      completionDate: '2023-12-01',
      status: 'Completed',
    },
  ];

  const achievements = [
    {
      title: 'Business Plan Competition Winner',
      date: '2024-02',
      description: 'First place in the annual entrepreneurship challenge',
    },
    {
      title: 'Community Leadership Award',
      date: '2023-11',
      description: 'Recognition for outstanding community service',
    },
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      await updateUser(formData);
      setSuccess('Profile updated successfully');
      setEditing(false);
    } catch (err) {
      setError(err.message || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
      phone: user?.phone || '',
      address: user?.address || '',
      bio: user?.bio || '',
      education: user?.education || [],
      certifications: user?.certifications || [],
      skills: user?.skills || [],
      interests: user?.interests || [],
    });
    setEditing(false);
    setError('');
  };

  const renderPersonalInfo = () => (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6">Personal Information</Typography>
        <Button
          variant={editing ? "outlined" : "contained"}
          startIcon={editing ? <CancelIcon /> : <EditIcon />}
          onClick={() => editing ? handleCancel() : setEditing(true)}
        >
          {editing ? "Cancel" : "Edit"}
        </Button>
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              disabled={!editing}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              disabled={!editing}
            />
          </Grid>
        </Grid>

        {editing && (
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button
              type="submit"
              variant="contained"
              startIcon={<SaveIcon />}
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
          </Box>
        )}
      </form>
    </Paper>
  );

  const renderProgress = () => (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Program Progress
      </Typography>
      <List>
        {programProgress.map((program) => (
          <ListItem key={program.program}>
            <ListItemIcon>
              <ProgressIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={program.program}
              secondary={
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <CircularProgress
                      variant="determinate"
                      value={program.progress}
                      size={24}
                      sx={{ mr: 1 }}
                    />
                    <Typography variant="body2">
                      {program.progress}% Complete
                    </Typography>
                  </Box>
                  <Typography variant="caption" display="block">
                    {`${program.startDate} - ${program.completionDate}`}
                  </Typography>
                  <Chip
                    label={program.status}
                    color={program.status === 'Completed' ? 'success' : 'primary'}
                    size="small"
                  />
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );

  const renderAchievements = () => (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Achievements
      </Typography>
      <List>
        {achievements.map((achievement) => (
          <ListItem key={achievement.title}>
            <ListItemIcon>
              <AchievementIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={achievement.title}
              secondary={
                <>
                  <Typography variant="caption" display="block">
                    {achievement.date}
                  </Typography>
                  <Typography variant="body2">
                    {achievement.description}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );

  const renderSkillsAndCertifications = () => (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Skills & Certifications
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle2" gutterBottom>
          Skills
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          {formData.skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              onDelete={editing ? () => {/* Handle delete */} : undefined}
            />
          ))}
        </Stack>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle2" gutterBottom>
        Certifications
      </Typography>
      <List>
        {formData.certifications.map((cert) => (
          <ListItem key={cert.name}>
            <ListItemIcon>
              <CertificateIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={cert.name}
              secondary={`${cert.issuer} • ${cert.date}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );

  const renderInterests = () => (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Interests
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {formData.interests.map((interest, index) => (
          <Chip
            key={index}
            label={interest}
            onDelete={editing ? () => {/* Handle delete */} : undefined}
          />
        ))}
      </Stack>
    </Paper>
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

        <Grid container spacing={3}>
          {/* Profile Header */}
          <Grid item xs={12}>
            <Paper sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 3 }}>
              <Box sx={{ position: 'relative' }}>
                <Avatar
                  src={user?.avatar}
                  sx={{ width: 100, height: 100 }}
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    backgroundColor: 'background.paper',
                  }}
                  size="small"
                >
                  <PhotoCameraIcon />
                </IconButton>
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h5">
                  {user?.firstName} {user?.lastName}
                </Typography>
                <Typography color="textSecondary">
                  Member since {new Date(user?.joinDate).toLocaleDateString()}
                </Typography>
              </Box>
              <Button
                variant={editing ? "outlined" : "contained"}
                startIcon={editing ? <CancelIcon /> : <EditIcon />}
                onClick={() => editing ? handleCancel() : setEditing(true)}
              >
                {editing ? "Cancel" : "Edit Profile"}
              </Button>
            </Paper>
          </Grid>

          {/* Profile Content */}
          <Grid item xs={12}>
            <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 3 }}>
              <Tab icon={<PersonIcon />} label="Personal Info" />
              <Tab icon={<ProgressIcon />} label="Progress" />
              <Tab icon={<WorkIcon />} label="Achievements" />
              <Tab icon={<EducationIcon />} label="Skills & Certifications" />
              <Tab icon={<EducationIcon />} label="Interests" />
            </Tabs>

            {activeTab === 0 && renderPersonalInfo()}
            {activeTab === 1 && renderProgress()}
            {activeTab === 2 && renderAchievements()}
            {activeTab === 3 && renderSkillsAndCertifications()}
            {activeTab === 4 && renderInterests()}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile; 