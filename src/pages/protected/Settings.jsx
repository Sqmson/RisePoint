import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Switch,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Alert,
} from '@mui/material';

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    darkMode: false,
    twoFactorAuth: false,
  });
  const [success, setSuccess] = useState('');

  const handleChange = (setting) => {
    setSettings(prev => {
      const newSettings = {
        ...prev,
        [setting]: !prev[setting]
      };
      
      // Show success message
      setSuccess('Settings updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
      
      return newSettings;
    });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}

      <Paper elevation={3} sx={{ mt: 3 }}>
        <List>
          <ListItem>
            <ListItemText
              primary="Email Notifications"
              secondary="Receive email updates about your account"
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                checked={settings.emailNotifications}
                onChange={() => handleChange('emailNotifications')}
              />
            </ListItemSecondaryAction>
          </ListItem>
          
          <Divider />
          
          <ListItem>
            <ListItemText
              primary="Dark Mode"
              secondary="Toggle dark theme"
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                checked={settings.darkMode}
                onChange={() => handleChange('darkMode')}
              />
            </ListItemSecondaryAction>
          </ListItem>
          
          <Divider />
          
          <ListItem>
            <ListItemText
              primary="Two-Factor Authentication"
              secondary="Add an extra layer of security"
            />
            <ListItemSecondaryAction>
              <Switch
                edge="end"
                checked={settings.twoFactorAuth}
                onChange={() => handleChange('twoFactorAuth')}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default Settings; 