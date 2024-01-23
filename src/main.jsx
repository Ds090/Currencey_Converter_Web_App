// Importing React and ReactDOM from the appropriate paths
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing the root component of the application (App.jsx) and the associated styles
import App from './App.jsx';
import './index.css';

// Using ReactDOM.createRoot to render the root component in Concurrent Mode
// Note: Concurrent Mode is an experimental feature introduced in React 18
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrapping the root component with React.StrictMode for additional development mode checks
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
