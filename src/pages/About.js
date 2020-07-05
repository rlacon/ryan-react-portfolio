import React, { Component } from 'react';
import AboutHero from "../components/AboutHero"
import Resume from "../components/Resume"
class About extends Component {
  render() {
    return (
      <>
        <AboutHero />
        <Resume />
      </>
    );
  }
}

export default About;