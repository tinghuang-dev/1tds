import React from 'react';
import styled from 'styled-components';
import Heading from '../Heading';
import Link from '../Link';
import Logo from '../../app/Logo';
import Overlay from '../Overlay';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  border-radius: 8px;
  width: 600px;
`;

const Header = styled.div`
  position: relative;
  height: 65px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dadada;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const StyledLink = styled(Link)`
  position: absolute;
  left: 32px;
  top: 24px;
  color: #C97A40;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 100px 64px 16px;
`;

const ModalPage = ({ title, children }) => (
  <Overlay bg="grey">
    <Layout>
      <Header>
        <Logo />
        <StyledLink href="/">一团袋鼠</StyledLink>
      </Header>
      <Container>
        <Heading size="1x">{title}</Heading>
        {children}
      </Container>
    </Layout>
  </Overlay>
);

export default ModalPage;
