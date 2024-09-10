import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: .5%;
  right: 5%;
  z-index: 10;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  word-spacing: 20px;
`;

const NavItem = styled.li`
  margin-left: 20px;
  font-size: 1.2rem;

  &:not(:last-child)::after {
    content: '/';
    margin-left: 20px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #fff;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavItem><NavLink href="#home">home *</NavLink></NavItem>
        <NavItem><NavLink href="#about">about *</NavLink></NavItem>
        <NavItem><NavLink href="#services">services *</NavLink></NavItem>
        <NavItem><NavLink href="#contact">contact *</NavLink></NavItem>
      </NavList>
    </Nav>
  );
}

export default Navigation;