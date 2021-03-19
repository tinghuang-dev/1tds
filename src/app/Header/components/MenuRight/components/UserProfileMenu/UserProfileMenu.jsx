import React from 'react';
import Box from '../../../../../../components/Box';
import Button from '../../../../../../components/Button';
import DropdownMenu from '../../../../../../components/DropdownMenu';
import Icon from '../../../../../../components/Icon';
import Link from '../../../../../../components/Link';
import useToggler from '../../../../../../hooks/useToggler';

const UserProfileMenu = () => {
  const [showDropdownMenu, toggleDropdownMenu] = useToggler();
  const handleClick = () => toggleDropdownMenu();

  return (
    <Box position="relative">
      <Button variant="naked" onClick={handleClick}>
        <Icon name="userCircle" size="2x" />
      </Button>
      {showDropdownMenu && (
        <DropdownMenu placement="right" onClose={handleClick}>
          <Box px="md">
            <Link variant="text" href="/user/profile">
              用户信息
            </Link>
          </Box>
          <Box px="md" mt="md">
            <Link variant="text" href="/">
              团购管理
            </Link>
          </Box>
          <Box px="md" pb="sm" mt="md" borderBottom="@1" borderColor="border">
            <Link variant="text" href="/">
              团员管理
            </Link>
          </Box>
          <Box px="md" pt="sm">
            <Button variant="naked" size="sm">登出</Button>
          </Box>
        </DropdownMenu>
      )}
    </Box>
  );
};

export default UserProfileMenu;
