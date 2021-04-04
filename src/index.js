import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import ScrollToTop from 'react-router-scroll-top'
import { BrowserRouter } from 'react-router-dom';
import "react-image-gallery/styles/css/image-gallery.css";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);