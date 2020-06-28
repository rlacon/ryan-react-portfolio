import React, { Component } from 'react';
import '../assets/main.css';
import styled from "styled-components"

class Home extends Component {
  render() {
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `;
    const Wrapper = styled.section`
      padding: 4em;
      background: papayawhip;
    `;
    return (
      <Wrapper>
        <Title>Creative Technologist</Title>
        <p>test</p>
      </Wrapper>
    );
  }
}

export default Home;
