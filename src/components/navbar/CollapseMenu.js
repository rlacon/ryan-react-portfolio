import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function CollapseMenu(props) {
  if (props.navbarState) {
    return (
      <CollapseWrapper className="bg-gray-800">
        <NavLinks>
          <li><NavLink to="/" onClick={props.handleNavbar}>Home</NavLink></li>
          <li><NavLink to="/portfolio" onClick={props.handleNavbar}>Portfolio</NavLink></li>
          <li><NavLink to="/about" onClick={props.handleNavbar}>About</NavLink></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled.div`
  position: fixed;
  z-index: 10;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  & li {
    transition: all 300ms linear 0s;
  }
  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #9f7aea;
      border-bottom: 1px solid #9f7aea;
    }
  }
`;