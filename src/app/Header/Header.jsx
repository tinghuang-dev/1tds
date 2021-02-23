import React from 'react';
import styled from 'styled-components';
import MenuLeft from './components/MenuLeft/MenuLeft';
import Logo from './components/Logo';
import MenuRight from './components/MenuRight/MenuRight';

const Nav = styled.header`
  display :flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1px;
  box-shadow: 0px 1px 0px rgba(88, 73, 62, 0.2);
`;

const Header = () => (
  <Nav>
    <MenuLeft />
    <Logo />
    <MenuRight />
  </Nav>
);
export default Header;
