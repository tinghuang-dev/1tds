import React from 'react';
import styled from 'styled-components';
import MenuLeft from './components/MenuLeft';
import Logo from './components/Logo';
import MenuRight from './components/MenuRight';
import Container from '../../components/Container';

const Nav = styled.header`
  background: white;
  box-shadow: 0px 1px 0px #dadada;
`;

const Layout = styled.div`
display: flex;
  justify-content: space-between;
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
