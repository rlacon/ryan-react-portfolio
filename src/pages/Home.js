import React, { Component } from 'react';
import Hero from '../components/Hero';
import SkillsGallery from '../components/SkillsGallery';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../assets/main.css';

class Home extends Component {
  render() {
    return (
      <>
      <Hero />
      <SkillsGallery />
      </>
    );
  }
}

export default Home;