import React from 'react';
import Router from 'next/router';
import Button from '../Button';
import Box from '../Box';
import Flex from '../Flex';

const UserPageNav = () => (
  <Flex
    py="2x"
    px="lg"
    flexDirection="column"
    bg="grey"
    width="350px"
    alignItems="center"
  >
    <Box my="md">
      <Button
        variant="default"
        size="lg"
        onClick={() => Router.push('/user/profile')}
      >
        用户信息
      </Button>
    </Box>
    <Box my="md">
      <Button size="lg" variant="default">
        团购管理
      </Button>
    </Box>
    <Box my="md">
      <Button
        variant="primary"
        size="lg"
        onClick={() => Router.push('/user/invitations')}
      >
        团员管理
      </Button>
    </Box>
  </Flex>
);

export default UserPageNav;
