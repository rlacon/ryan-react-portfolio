import React, { Component } from 'react';
import portfolioData from '../assets/portfolioData';
import styled, { keyframes, css } from "styled-components"

class About extends Component {

  render() {
    const rotate = keyframes`
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    `;

    const Rotate = styled.div`
      display: inline-block;
      animation: ${rotate} 2s linear infinite;
      padding: 2rem 1rem;
      font-size: 1.2rem;
    `;

    const data = portfolioData.main

    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      // var resumeDownload = this.props.data.resumedownload;
    } else {
      name = data.name;
      profilepic = "images/" + data.image;
      bio = data.bio;
      city = data.address.city;
      state = data.address.state;
      phone = data.phone;
      email = data.email;
      // resumeDownload = data.resumedownload;
    }

    return (
      <section>
        <Rotate>
          <img className="align-middle h-20 rounded-full" src={profilepic} alt="Ryan Lacon Profile Pic" />
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