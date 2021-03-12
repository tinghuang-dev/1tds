import React from 'react';
import styled from 'styled-components';
import MenuLeft from './components/MenuLeft';
import Logo from './components/Logo';
import MenuRight from './components/MenuRight';
import Container from '../../components/Container';

const Nav = styled.header`
  background: white;
  border-bottom: 1px solid #dadada;
`;

const Layout = styled.div`
  display: flex;
`;

const Header = () => (
  <Nav>
    <Container>
      <Layout>
        <MenuLeft />
        <Logo />
        <MenuRight />
      </Layout>
    </Container>
  </Nav>
);
export default Header;
