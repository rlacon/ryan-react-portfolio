import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const Brand = () => {
  return (
    <NavLinks>
      <NavLink to="/">Ryan Lacon</NavLink>
    </NavLinks>
  )
};

export default Brand

const NavLinks = styled.div`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #9f7aea;
      border-bottom: 1px solid #9f7aea;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;