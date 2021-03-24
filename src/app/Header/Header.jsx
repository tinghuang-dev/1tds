import React, { useEffect, useState } from 'react';
import Box from '../../components/Box';
import Container from '../../components/Container';
import Flex from '../../components/Flex';
import axios from '../../lib/axios';
import getAuthToken from '../../utils/getAuthToken';
import Logo from '../Logo';
import MenuLeft from './components/MenuLeft';
import MenuRight from './components/MenuRight';

const Header = () => {
  const [tokenizedUser, setTokenizedUser] = useState();

  useEffect(() => {
    setTokenizedUser(getAuthToken());

    const interceptor = axios.interceptors.response.use((response) => {
      setTokenizedUser(getAuthToken());

      return response;
    });

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, []);

  return (
    <Box as="header" bg="white" borderBottom="@1" borderColor="border">
      <Container>
        <Flex>
          <MenuLeft user={tokenizedUser} />
          <Logo />
          <MenuRight user={tokenizedUser} />
        </Flex>
      </Container>
    </Box>
  );
};
export default Header;
