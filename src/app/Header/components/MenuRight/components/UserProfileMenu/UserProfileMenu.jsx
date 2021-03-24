import React from 'react';
import Box from '../../../../../../components/Box';
import Button from '../../../../../../components/Button';
import DropdownMenu from '../../../../../../components/DropdownMenu';
import Icon from '../../../../../../components/Icon';
import Link from '../../../../../../components/Link';
import useGetActiveLinkProps from '../../../../../../hooks/useGetActiveLinkProps';
import useToggler from '../../../../../../hooks/useToggler';
import logout from '../../../../../../utils/logout';

const UserProfileMenu = () => {
  const [showDropdownMenu, toggleDropdownMenu] = useToggler();
  const handleClick = (event) => {
    event.stopPropagation();
    toggleDropdownMenu();
  };

  const getActiveLinkProps = useGetActiveLinkProps();

  return (
    <Box position="relative">
      <Button variant="naked" onClick={handleClick}>
        <Icon name="userCircle" size="lg" />
      </Button>
      {showDropdownMenu && (
        <DropdownMenu placement="right" onClose={handleClick}>
          <Box px="md">
            <Link
              {...getActiveLinkProps('/user/profile')} /* eslint-disable-line react/jsx-props-no-spreading */
            >
              用户信息
            </Link>
          </Box>
          <Box px="md" mt="md">
            <Link
              {...getActiveLinkProps('/')} /* eslint-disable-line react/jsx-props-no-spreading */
            >
              团购管理
            </Link>
          </Box>
          <Box px="md" pb="sm" mt="md" borderBottom="@1" borderColor="border">
            <Link
              {...getActiveLinkProps('/')} /* eslint-disable-line react/jsx-props-no-spreading */
            >
              团员管理
            </Link>
          </Box>
          <Box px="md" pt="sm">
            <Button variant="naked" size="sm" onClick={logout}>
              登出
            </Button>
          </Box>
        </DropdownMenu>
      )}
    </Box>
  );
};

export default UserProfileMenu;
