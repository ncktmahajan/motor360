import React from 'react';
import { HeaderContainer, Logo, Nav, NavItem } from '../styles/HeaderStyle';
import { ReactComponent as LogoIcon } from '../assets/motor_360.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <LogoIcon />
      </Logo>
      <Nav>
        <NavItem>Overview</NavItem>
        <NavItem>Contact Us</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
