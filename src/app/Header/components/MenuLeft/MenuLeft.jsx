import React from 'react';
import styled from 'styled-components';
import Link from '../../../../components/Link';
import ResponsiveBurgerMenu from './components/ResponsiveBurgerMenu';

const LeftNav = styled.div`
  flex: 1;
  height: 64px;
  display: flex;
  align-items: center;

  @media (min-width: 320px) and (max-width: 1024px) {
    height: 40px;
    padding-left: 16px;
  }
`;

const Item = styled.li`
  padding: 0px 32px 0px 0px;

  @media (min-width: 320px) and (max-width: 1024px) {
    display: none;
  }
`;

const NavigationLink = styled(Link)`
  color: #C97A40;
`;

const MenuLeft = () => (
  <>
    <LeftNav>
      <ResponsiveBurgerMenu />
      <Item>
        <NavigationLink href="/">
          一团袋鼠
        </NavigationLink>
      </Item>
      <Item>
        <NavigationLink href="/become-a-captain">
          成为团长
        </NavigationLink>
      </Item>
      <Item>
        <NavigationLink href="/faq">
          常见问题
        </NavigationLink>
      </Item>
    </LeftNav>
  </>
);

export default MenuLeft;
