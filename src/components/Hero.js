import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../assets/main.css';

function Hero(props) {
  return (
    <div className="py-20 bg-gradient-t-blue-burst">
      <div className="container mx-auto px-6">
        <RotatingTextStyle>
          <h2 className="py-8 text-5xl font-bold mb-2 text-white">I'm a <ReactRotatingText className="RotatingTextStyle" items={['Developer', 'Designer', 'Researcher', 'Problem-Solver']} /></h2>
        </RotatingTextStyle>
        <NavLink to="/portfolio"><button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">See my work</button></NavLink>
        <AnchorLink href="#skills" className="underline text-white font-bold py-4 px-8 uppercase tracking-wider">Skills</AnchorLink>
        <a href="#" className="underline text-white font-bold py-4 px-8 uppercase tracking-wider">Inquiries</a>
      </div>
    </div>
  );
}

export default Hero;

const ReactRotatingText = require('react-rotating-text');

const RotatingTextStyle = styled.div`
.react-rotating-text-cursor {
  animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
}

@keyframes blinking-cursor {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`;