import React from 'react';
import styled from 'styled-components';
import Icon from '../../../../../../components/Icon';
import Button from '../../../../../../components/Button';
import useToggler from '../../../../../../hooks/useToggler';
import SlideMenu from './components/SlideMenu';

const Container = styled.div`
  position: relative;
`;

const SlideMenuToggler = styled(Button)`
  display: none;

  @media (min-width: 320px) and (max-width: 1024px) {
    display: block;
  }
`;

const ResponsiveBurgerMenu = () => {
  const [showSlideMenu, toggleSlideMenu] = useToggler();
  const handleClick = () => toggleSlideMenu();

  return (
    <Container>
      <SlideMenuToggler variant="naked" onClick={handleClick}>
        <Icon name={showSlideMenu ? 'close' : 'menu'} />
      </SlideMenuToggler>
      {showSlideMenu && (<SlideMenu onClose={() => toggleSlideMenu()} />)}
    </Container>
  );
};

export default ResponsiveBurgerMenu;
