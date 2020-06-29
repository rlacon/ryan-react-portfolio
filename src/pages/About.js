import React, { Component } from 'react';
import portfolioData from '../assets/portfolioData';
import styled, { keyframes } from "styled-components"

class About extends Component {

  render() {
    const data = portfolioData.main
    const name = data.name;
    const profilepic = "images/" + data.image;
    const bio = data.bio;
    const city = data.address.city;
    const state = data.address.state;
    const phone = data.phone;
    const email = data.email;
    // const resumeDownload = data.resumedownload;

    return (
      <section>
        <Rotate >
          <img className="align-middle h-20 rounded-full z-0" src={profilepic} alt="Ryan Lacon Profile Pic" />
        </Rotate>
        <h2>About Me</h2>
        <p>{bio}</p>
        <h2>Contact Details</h2>
        <p>{name}</p><br />
        <p>{city}, {state}
        </p><br />
        <p>{phone}</p><br />
        <p>{email}</p>
      </section>
    );
  }
}

export default About;

const rotate = keyframes`
  z-index: 1;
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

const Rotate = styled.div`
  display: inline-block;
  z-index: 1;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;