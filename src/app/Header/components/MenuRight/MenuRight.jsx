import React from 'react';
import Box from '../../../../components/Box';
import Button from '../../../../components/Button';
import Flex from '../../../../components/Flex';
import Hide from '../../../../components/Hide';
import Icon from '../../../../components/Icon';
import Input from '../../../../components/Input';
import useToggler from '../../../../hooks/useToggler';
import UserAuthModals from '../../../UserAuthModals';
import ResponsiveSearchButton from './components/ResponsiveSearchButton';
import UserProfileMenu from './components/UserProfileMenu';
import InviteMemberButton from './components/InviteMemberButton';

const MenuRight = ({ user }) => {
  const [showUserAuthModals, toggleShowUserAuthModals] = useToggler(false);

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
      {user ? (
        <Hide xs sm>
          <Flex alignItems="center">
            <InviteMemberButton />
            <UserProfileMenu />
          </Flex>
        </Hide>
      ) : (
        <>
          <Button size="sm" onClick={() => toggleShowUserAuthModals()}>登陆</Button>
          {showUserAuthModals && (<UserAuthModals onClose={() => toggleShowUserAuthModals()} />)}
        </>
      )}
    </Flex>
  );
};

export default MenuRight;
