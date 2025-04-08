const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username or email
    const user = await User.findOne({
      $or: [
        { username: username },
        { email: username }
      ]
    });

    if (!user) {
      return res.status(401).json({
        error: 'Invalid credentials'
      });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        error: 'Invalid credentials'
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        fullName: user.personalInfo.fullName,
        role: user.role
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      error: 'Server error'
    });
  }
});

module.exports = router;

// filepath: /d:/year 2/SEM 2/Software Engineering/RisePoint/src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { app, analytics } from './firebase/firebase'; // Import Firebase configuration

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// filepath: /d:/year 2/SEM 2/Software Engineering/RisePoint/package.json

// filepath: /d:/year 2/SEM 2/Software Engineering/RisePoint/vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';




