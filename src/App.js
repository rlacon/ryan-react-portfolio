import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './assets/main.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import About from './pages/About';
import Resume from './pages/Resume';
import Testimonials from './pages/Testimonials';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home'
import MockProj from './pages/MockProj';

class App extends Component {
  state = {
    loading: true
  };

  comoonentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    const { loading } = this.state;
    
    if(!loading) {
      return null;
    }

    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Navbar />
            <Route exact path="/" render={() => {
              return <Home />
            }} />

            <Route path="/about" render={() => {
              return <About />
            }} />
            <Route path="/resume" render={() => {
              return <Resume />
            }} />
            <Route exact path="/portfolio" render={() => {
              return <Portfolio />
            }} />

            <Route path="/testimonials" render={() => {
              return <Testimonials />
            }} />
            <Route path="/portfolio/mockproj" render={() => {
              return <MockProj />
            }} />
            <Footer />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}


export default App;