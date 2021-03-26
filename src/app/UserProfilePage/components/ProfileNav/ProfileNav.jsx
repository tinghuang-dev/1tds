import React from 'react';
import Button from '../../../../components/Button';
import Box from '../../../../components/Box';
import Flex from '../../../../components/Flex';

const ProfileNav = () => (
  <Flex
    py="2x"
    px="lg"
    flexDirection="column"
    bg="grey"
    width="350px"
    alignItems="center"
  >
    <Box my="md">
      <Button variant="primary" size="lg">
        用户信息
      </Button>
    </Box>
    <Box my="md">
      <Button size="lg" variant="naked">
        团购管理
      </Button>
    </Box>
    <Box my="md">
      <Button variant="naked" size="lg">
        团员管理
      </Button>
    </Box>
  </Flex>
);
export default ProfileNav;
