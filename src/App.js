import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './assets/main.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";


import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import MockProj from './pages/MockProj';

function App() {
  const [data, setData] = useState({ portfolioData: {}, navbarOpen: false });

  const handleNavbar = () => {
    setData({ navbarOpen: !data.navbarOpen });
  };

  useEffect(() => {
    fetch('/portfolioData.json')
      .then(response => response.json())
      // console.log(response.text())
      .then(data => setData({ portfolioData: data }))
      // .catch())
  }, []);

  return (
      <Switch>
        <React.Fragment>
          <div className="relative min-h-screen bg-white pt-20 pb-20">
            <Navbar
              navbarState={data.navbarOpen}
              handleNavbar={handleNavbar}
            />
            <Route exact path="/" data={data.portfolioData && data.portfolioData.main} render={() => {
              return <Home />
            }} />

            <Route path="/about" render={() => {
              return <About />
            }} />

            <Route exact path="/portfolio" render={() => {
              return <Portfolio />
            }} />

            <Route path="/testimonials" data={data.portfolioData && data.portfolioData.testimonials} render={() => {
              return <Testimonials />
            }} />
            <Route path="/portfolio/mockproj" render={() => {
              return <MockProj />
            }} />
             <ScrollToTop/>
            <Footer />
           
          </div>
          
        </React.Fragment>
      </Switch>
  );
}

export default App;
