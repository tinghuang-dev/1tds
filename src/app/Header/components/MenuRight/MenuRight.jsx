import React, { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import Box from '../../../../components/Box';
import Button from '../../../../components/Button';
import Flex from '../../../../components/Flex';
import Hide from '../../../../components/Hide';
import Icon from '../../../../components/Icon';
import Input from '../../../../components/Input';
import useToggler from '../../../../hooks/useToggler';
import UserAuthModals from '../../../UserAuthModals';
import ResponsiveSearchButton from './components/ResponsiveSearchButton';
import axios from '../../../../lib/axios';
import UserProfileMenu from './components/UserProfileMenu';

const getAuthToken = () => {
  const authToken = localStorage.getItem('AUTH_TOKEN');
  const payload = jwt.decode(authToken);

  if (!payload) {
    return null;
  }

  const { exp } = payload;
  if (Date.now() > exp * 1000) {
    return null;
  }

  return payload;
};

const MenuRight = () => {
  const [showUserAuthModals, toggleShowUserAuthModals] = useToggler(false);
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
    <Flex
      alignItems="center"
      justifyContent="flex-end"
      pr={['md', null, 0]}
      flex="1"
      height="50px"
    >
      <Box mr="md">
        <Hide xs sm>
          <Box width="250px">
            <Input size="sm" suffix={(<Icon name="search" />)} />
          </Box>
        </Hide>
        <Hide md lg>
          <ResponsiveSearchButton />
        </Hide>
      </Box>
      {tokenizedUser ? (<UserProfileMenu />) : (
        <>
          <Button size="sm" onClick={() => toggleShowUserAuthModals()}>登陆</Button>
          {showUserAuthModals && (<UserAuthModals onClose={() => toggleShowUserAuthModals()} />)}
        </>
      )}
    </Flex>
  );
};

export default MenuRight;
