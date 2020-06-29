import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function CollapseMenu(props) {
  if (props.navbarState) {
    return (
      <CollapseWrapper>
        <NavLinks>
          <li><NavLink to="/" onClick={props.handleNavbar}>Home</NavLink></li>
          <li><NavLink to="/portfolio" onClick={props.handleNavbar}>Portfolio</NavLink></li>
          <li><NavLink to="/about" onClick={props.handleNavbar}>About</NavLink></li>
          <li><NavLink to="/testimonials" onClick={props.handleNavbar}>Testimonials</NavLink></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled.div`
  background: #2d3436;
  position: fixed;
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
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;