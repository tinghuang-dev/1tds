import React from 'react';
import styled from 'styled-components';
import Link from '../../../../components/Link';

const Left = styled.ul`
  height: 64px;
  list-style: none;
  margin: 0;
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  padding: 0px 32px 0px 0px;
`;

const NavigationLink = styled(Link)`
  color: #C97A40;
`;

const MenuLeft = () => (
  <Left>
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
  </Left>
);

export default MenuLeft;
