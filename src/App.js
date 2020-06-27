import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import $ from 'jquery';
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

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      portfolioData: {}
    };
  }

  getportfolioData() {
    $.ajax({
      url: '/portfolioData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ portfolioData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  // state = {
  //   loading: true
  // };

  componentDidMount() {
    this.getportfolioData();
    // demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  render() {
    // const { loading } = this.state;
    
    // if(loading) {
    //   return null;
    // }

    return (
      <BrowserRouter>
        <Switch>
        <React.Fragment>
          <div className="relative min-h-screen">
            <Navbar />
            <Route exact path="/" data={this.state.portfolioData.main} render={() => {
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

            <Route path="/testimonials" data={this.state.portfolioData.testimonials} render={() => {
              return <Testimonials />
            }} />
            <Route path="/portfolio/mockproj" render={() => {
              return <MockProj />
            }} />
            <Footer />
            <div className="space-y-100"></div>
          </div>
          </React.Fragment>
        </Switch>
      </BrowserRouter>
    );
  }
}

// function demoAsyncCall() {
//   return new Promise((resolve) => setTimeout(() => resolve(), 2500));
// }


export default App;