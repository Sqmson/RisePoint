import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Avatar,
  Divider,
} from '@mui/material';
import {
  AccountCircle,
  Dashboard,
  Person,
  ExitToApp,
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleClose();
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to={user ? "/dashboard" : "/login"}
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          RisePoint
        </Typography>

        {!user && (
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              color="inherit"
              variant="outlined"
              component={RouterLink}
              to="/login"
              sx={{ fontWeight: 'bold' }}
            >
              Login
            </Button>
            <Button
              color="secondary"
              variant="contained"
              component={RouterLink}
              to="/register"
            >
              Sign Up
            </Button>
          </Box>
        )}

        {isAuthenticated && (
          <>
            <IconButton
              onClick={handleMenu}
              color="inherit"
              size="large"
              edge="end"
            >
              {user?.photoURL ? (
                <Avatar src={user.photoURL} alt={user.firstName} />
              ) : (
                <AccountCircle />
              )}
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={() => handleNavigate('/dashboard')}>
                <Dashboard sx={{ mr: 1 }} /> Dashboard
              </MenuItem>
              <MenuItem onClick={() => handleNavigate('/profile')}>
                <Person sx={{ mr: 1 }} /> Profile
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                <ExitToApp sx={{ mr: 1 }} /> Logout
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 