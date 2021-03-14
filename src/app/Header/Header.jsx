import React from 'react';
import Box from '../../components/Box';
import Container from '../../components/Container';
import Flex from '../../components/Flex';
import Logo from './components/Logo';
import MenuLeft from './components/MenuLeft';
import MenuRight from './components/MenuRight';

const Header = () => (
  <Box as="header" bg="white" borderBottom="@1" borderColor="border">
    <Container>
      <Flex>
        <MenuLeft />
        <Logo />
        <MenuRight />
      </Flex>
    </Container>
  </Box>
);
export default Header;
