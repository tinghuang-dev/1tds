import React from 'react';
import Box from '../../../../../../components/Box';
import Button from '../../../../../../components/Button';
import Icon from '../../../../../../components/Icon';
import useToggler from '../../../../../../hooks/useToggler';
import SlideMenu from './components/SlideMenu';

const ResponsiveBurgerMenu = () => {
  const [showSlideMenu, toggleSlideMenu] = useToggler();
  const handleClick = () => toggleSlideMenu();

  return (
    <Box position="relative">
      <Button variant="naked" onClick={handleClick}>
        <Icon name={showSlideMenu ? 'close' : 'menu'} />
      </Button>
      {showSlideMenu && (<SlideMenu onClose={() => toggleSlideMenu()} />)}
    </Box>
  );
};

export default ResponsiveBurgerMenu;
