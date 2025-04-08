import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
  Avatar,
  Typography,
  Tooltip,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  School as SchoolIcon,
  Business as BusinessIcon,
  Agriculture as AgricultureIcon,
  Work as WorkIcon,
  Event as EventIcon,
  Assignment as ApplicationIcon,
  Notifications as NotificationsIcon,
  Help as HelpIcon,
  Timeline as TimelineIcon,
  People as PeopleIcon,
  Assessment as AssessmentIcon,
  Folder as FolderIcon,
  Settings as SettingsIcon,
  Tune as TuneIcon,
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const menuItems = [
    { 
      text: 'Dashboard', 
      icon: <DashboardIcon />, 
      path: '/dashboard',
      tooltip: 'View your dashboard'
    },
    { 
      text: 'Profile', 
      icon: <PersonIcon />, 
      path: '/profile',
      tooltip: 'Manage your profile'
    },
    { 
      text: 'Programs', 
      icon: <SchoolIcon />, 
      path: '/programs',
      tooltip: 'Browse available programs'
    },
    {
      text: 'Support',
      icon: <HelpIcon />,
      path: '/support',
      tooltip: 'Get help and support'
    }
  ];

  const resourceItems = [
    {
      text: 'Business Resources',
      icon: <BusinessIcon />,
      path: '/resources/business',
      tooltip: 'Access business development materials'
    },
    {
      text: 'Agricultural Hub',
      icon: <AgricultureIcon />,
      path: '/resources/agriculture',
      tooltip: 'Access agricultural resources'
    },
    {
      text: 'Job Board',
      icon: <WorkIcon />,
      path: '/jobs',
      tooltip: 'Browse job opportunities'
    },
  ];

  const supportItems = [
    {
      text: 'Notifications',
      icon: <NotificationsIcon />,
      path: '/notifications',
      tooltip: 'View your notifications'
    },
    {
      text: 'Help & Support',
      icon: <HelpIcon />,
      path: '/support',
      tooltip: 'Get help and support'
    },
  ];

  const roleMenuItems = {
    admin: [
      { text: 'User Management', icon: <PeopleIcon />, path: '/admin/users' },
      { text: 'Program Management', icon: <SettingsIcon />, path: '/admin/programs' },
    ],
  };

  const isActive = (path) => location.pathname === path;

  const renderMenuItems = (items) => (
    items.map((item) => (
      <Tooltip key={item.text} title={item.tooltip} placement="right">
        <ListItem
          button
          onClick={() => {
            navigate(item.path);
            if (isMobile) setMobileOpen(false);
          }}
          sx={{
            backgroundColor: isActive(item.path)
              ? 'action.selected'
              : 'transparent',
            '&:hover': {
              backgroundColor: 'action.hover',
            },
            borderRadius: 1,
            mx: 1,
            mb: 0.5,
          }}
        >
          <ListItemIcon
            sx={{
              color: isActive(item.path)
                ? 'primary.main'
                : 'text.secondary',
              minWidth: 40,
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText
            primary={item.text}
            sx={{
              color: isActive(item.path)
                ? 'primary.main'
                : 'text.primary',
            }}
          />
        </ListItem>
      </Tooltip>
    ))
  );

  const drawerContent = (
    <Box sx={{ height: '100%', pt: '64px' }}>
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Avatar
          src={user?.photoURL}
          alt={user?.firstName}
          sx={{ 
            width: 64, 
            height: 64, 
            mx: 'auto', 
            mb: 1,
            bgcolor: 'primary.main' 
          }}
        >
          {user?.firstName?.[0]}
        </Avatar>
        <Typography variant="subtitle1" fontWeight="medium">
          {user?.firstName} {user?.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user?.email}
        </Typography>
      </Box>
      
      <Divider sx={{ my: 1 }} />
      
      <List>
        {renderMenuItems(menuItems)}
      </List>

      <Divider sx={{ my: 1 }} />
      <Typography variant="overline" sx={{ px: 3, color: 'text.secondary' }}>
        Resources
      </Typography>
      <List>
        {renderMenuItems(resourceItems)}
      </List>

      <Divider sx={{ my: 1 }} />
      <Typography variant="overline" sx={{ px: 3, color: 'text.secondary' }}>
        Support
      </Typography>
      <List>
        {renderMenuItems(supportItems)}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={() => setMobileOpen(!mobileOpen)}
        sx={{
          position: 'fixed',
          left: 0,
          top: '70px',
          display: { sm: 'none' },
          zIndex: theme.zIndex.drawer + 1,
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: '0 4px 4px 0',
        }}
      >
        {mobileOpen ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: '220px',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '220px',
            boxSizing: 'border-box',
            border: 'none',
            backgroundColor: 'background.paper',
            overflowX: 'hidden',
            boxShadow: 1,
            '@media (forced-colors: active)': {
              borderRight: '1px solid CanvasText',
            },
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0,0,0,0.2)',
              borderRadius: '4px',
            },
          },
        }}
      >
        <Box sx={{ 
          height: '100%', 
          pt: '64px',
          overflowX: 'hidden',
        }}>
          {drawerContent}
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar; 