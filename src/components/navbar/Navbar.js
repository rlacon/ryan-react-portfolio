import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavBar className="bg-gray-800">
        <FlexContainer>
          <Brand />
          <NavLinks>
            <NavLink data={isOpen ? setIsOpen : undefined} to="/" onClick={() => setIsOpen(!isOpen)} >Home</NavLink>
            <NavLink to="/portfolio">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  );
};

export default Navbar;

const NavBar = styled.div`
  position: fixed;
  height: 5rem;
  line-height: 5rem;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`;

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

const BurgerWrapper = styled.div`
  margin: auto 0;
  @media (min-width: 769px) {
    display: none;
  }
`;