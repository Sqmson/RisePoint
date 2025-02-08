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