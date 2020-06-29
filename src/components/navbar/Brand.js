import React from 'react'
import styled from "styled-components";
import portfolioData from '../../assets/portfolioData';
import { NavLink } from 'react-router-dom';

const data = portfolioData.main
const navLogo = "images/" + data.logo;

const Brand = () => {
  return (
    <NavLink to="/">
      <Image src={navLogo} alt="Logo" />
    </NavLink>
  )
};

export default Brand

const Image = styled.img`
margin: auto;
  height: 100%;
  padding: 10px;
  margin: auto 0;
`;