import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Ensure process.env is defined
if (typeof process === 'undefined') {
  window.process = { env: { NODE_ENV: process.env.REACT_APP_NODE_ENV } };
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);