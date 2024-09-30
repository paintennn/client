import React from "react";
import ReactDOM from "react-dom/client"; // Use 'react-dom/client' for React 18
import "./index.css";
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Get the root element
const rootElement = document.getElementById('root');

// Create a root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);



