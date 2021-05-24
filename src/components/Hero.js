import React from 'react'
import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { NavLink } from "react-router-dom";
import '../assets/main.css';

function Hero(props) {
  return (
    <div className="py-20 bg-gradient-t-blue-burst">
      <div className="container mx-auto px-6">
        <RotatingTextStyle>
          <h2 className="py-8 text-5xl font-bold mb-2 text-white">I'm a <ReactRotatingText className="RotatingTextStyle" items={['Designer', 'Developer', 'Researcher', 'Problem-Solver', 'Googling Expert']} /></h2>
        </RotatingTextStyle>
        {/* <AnchorLink offset='100' href="#skills" className="underline text-white font-bold py-4 pr-8 uppercase tracking-wider">Skills</AnchorLink>
        <NavLink to="/portfolio" className="underline text-white font-bold py-4 px-8 uppercase tracking-wider" href="#work">See my work</NavLink>
        <a className="underline text-white font-bold py-4 px-8 uppercase tracking-wider" href="https://github.com/rlacon/ryan-react-portfolio" target="_blank">Github site link</a> */}
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