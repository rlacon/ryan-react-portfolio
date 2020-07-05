import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import ScrollToTop from 'react-router-scroll-top'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ScrollToTop />
      <App />
    </React.StrictMode>
    
  </BrowserRouter>,
  document.getElementById("root")
);