import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Correctly pointing to the main App component
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
