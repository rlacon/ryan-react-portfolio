import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './assets/main.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import UDisc from './pages/UDisc';
import MoveOMatic from './pages/MoveOMatic';
import WriteHaven from './pages/WriteHaven';

function App() {
  const [data, setData] = useState({ portfolioData: {}, navbarOpen: false });

  const handleNavbar = () => {
    setData({ navbarOpen: !data.navbarOpen });
  };

  return (
    <Switch>
      <React.Fragment>
        <div className="relative min-h-screen bg-white pt-20 pb-20">
          <Navbar
            navbarState={data.navbarOpen}
            handleNavbar={handleNavbar}
          />

          <Route exact path="/" render={() => {
            return <Home />
          }} />

          <Route path="/about" render={() => {
            return <About />
          }} />

          <Route exact path="/portfolio" render={() => {
            return <Portfolio />
          }} />

          <Route path="/portfolio/u-disc" render={() => {
            return <UDisc />
          }} />

          <Route path="/portfolio/move-o-matic" render={() => {
            return <MoveOMatic />
          }} />

          <Route path="/portfolio/write-haven" render={() => {
            return <WriteHaven />
          }} />

          <ScrollToTop />
          <Footer />
        </div>
      </React.Fragment>
    </Switch>
  );
}

export default App;
