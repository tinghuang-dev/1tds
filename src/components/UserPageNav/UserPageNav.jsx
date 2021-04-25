import React from 'react';
import Box from '../Box';
import Flex from '../Flex';
import useGetActiveLinkProps from '../../hooks/useGetActiveLinkProps';
import UserProfileNavLink from './components/UserProfileNavLink/UserProfileNavLink';

const UserPageNav = () => {
  const getActiveLinkProps = useGetActiveLinkProps();

  return (
    <Flex
      py="2x"
      px="lg"
      flexDirection="column"
      bg="grey"
      width="350px"
      alignItems="center"
    >
      <Box my="lg" px="md">
        <UserProfileNavLink
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...getActiveLinkProps('/user/profile')}
        >
          用户信息
        </UserProfileNavLink>
        <Box mt="1x">
          <UserProfileNavLink
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...getActiveLinkProps('/')}
          >
            团购管理
          </UserProfileNavLink>
        </Box>
        <Box mt="1x">
          <UserProfileNavLink
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...getActiveLinkProps('/user/invitations')}
          >
            团员管理
          </UserProfileNavLink>
        </Box>
      </Box>
    </Flex>
  );
};

export default UserPageNav;
