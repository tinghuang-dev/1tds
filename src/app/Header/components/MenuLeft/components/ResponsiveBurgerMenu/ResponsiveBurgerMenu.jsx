import React from 'react';
import Box from '../../../../../../components/Box';
import Button from '../../../../../../components/Button';
import Icon from '../../../../../../components/Icon';
import Link from '../../../../../../components/Link';
import useToggler from '../../../../../../hooks/useToggler';
import DropdownMenu from '../../../../../../components/DropdownMenu';

const ResponsiveBurgerMenu = () => {
  const [showDropdownMenu, toggleDropdownMenu] = useToggler();
  const handleClick = () => toggleDropdownMenu();

  return (
    <Box position="relative">
      <Button variant="naked" onClick={handleClick}>
        <Icon variant="text" name={showDropdownMenu ? 'close' : 'menu'} />
      </Button>
      {showDropdownMenu && (
        <DropdownMenu onClose={handleClick}>
          <Box px="md">
            <Link variant="text" href="/become-a-captain">
              成为团长
            </Link>
          </Box>
          <Box px="md" mt="md">
            <Link variant="text" href="/faq">
              常见问题
            </Link>
          </Box>
        </DropdownMenu>
      )}
    </Box>
  );
};

export default ResponsiveBurgerMenu;
