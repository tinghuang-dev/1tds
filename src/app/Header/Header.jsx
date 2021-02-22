import React from 'react';
import styled from 'styled-components';
import MenuLeft from './components/MenuLeft/MenuLeft';
import LogoName from './components/LogoName';
import Logo from './components/Logo';
import MenuRight from './components/MenuRight/MenuRight';

const Nav = styled.header`
  display :flex;
  justify-content: space-around;
  align-items: center;
`;

const Header = () => (
  <Nav>
    <MenuLeft />
    <LogoName />
    <Logo />
    <MenuRight />
  </Nav>
);

export default Header;
