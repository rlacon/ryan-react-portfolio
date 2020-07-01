import React from 'react'
import styled from "styled-components";
import '../assets/main.css';

function Hero(props) {
  return (
    <>
      <div className="py-20 bg-gradient-t-blue-burst">
        <div className="container mx-auto px-6">
          <RotatingTextStyle>
            <h2 className="py-8 text-5xl font-bold mb-2 text-white">I'm a <ReactRotatingText className="RotatingTextStyle" items={['Researcher', 'Developer', 'Designer', 'Problem-Solver']} /></h2>
          </RotatingTextStyle>
          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">See my work</button>
          <a href="#" className="underline text-white font-bold py-4 px-8 uppercase tracking-wider">More about me</a>
          <a href="#" className="underline text-white font-bold py-4 px-8 uppercase tracking-wider">Inquiries</a>
        </div>
      </div>
    </>
  );
}

export default Hero;

var ReactRotatingText = require('react-rotating-text');

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