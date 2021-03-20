import { useRouter } from 'next/router';
import React from 'react';
import Box from '../../../../../../components/Box';
import Button from '../../../../../../components/Button';
import DropdownMenu from '../../../../../../components/DropdownMenu';
import Icon from '../../../../../../components/Icon';
import Link from '../../../../../../components/Link';
import useToggler from '../../../../../../hooks/useToggler';
import getActiveLinkProps from '../../../../utils/getActiveLinkProps';

const ResponsiveBurgerMenu = () => {
  const [showDropdownMenu, toggleDropdownMenu] = useToggler();
  const handleClick = () => toggleDropdownMenu();

  const { pathname } = useRouter();
  const getLinkProps = getActiveLinkProps(pathname);

  return (
    <Box position="relative">
      <Button variant="naked" onClick={handleClick}>
        <Icon variant="naked" name="menu" />
      </Button>
      {showDropdownMenu && (
        <DropdownMenu onClose={handleClick}>
          <Box px="md">
            <Link
              {...getLinkProps('/')} /* eslint-disable-line react/jsx-props-no-spreading */
            >
              主页
            </Link>
          </Box>
          <Box px="md" mt="sm">
            <Link
              {...getLinkProps('/become-a-captain')} /* eslint-disable-line react/jsx-props-no-spreading */
            >
              成为团长
            </Link>
          </Box>
          <Box px="md" mt="sm">
            <Link
              {...getLinkProps('/faq')} /* eslint-disable-line react/jsx-props-no-spreading */
            >
              常见问题
            </Link>
          </Box>
        </DropdownMenu>
      )}
    </Box>
  );
};

export default ResponsiveBurgerMenu;
