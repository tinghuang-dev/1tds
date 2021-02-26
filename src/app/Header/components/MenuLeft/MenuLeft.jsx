import React from 'react';
import styled from 'styled-components';
import Link from '../../../../components/Link';

const Left = styled.ul`
  list-style: none;
  padding-left: 0px;
`;

const List = styled.li`
  display: inline-block;
  padding: 0px 32px 0px 0px;
`;

const NavigationLink = styled(Link)`
  color: #C97A40;
`;

const MenuLeft = () => (
  <Left>
    <List>
      <NavigationLink href="/">
        一团袋鼠
      </NavigationLink>
    </List>
    <List>
      <NavigationLink href="/become-a-captain">
        成为团长
      </NavigationLink>
    </List>
    <List>
      <NavigationLink href="/faq">
        常见问题
      </NavigationLink>
    </List>
  </Left>
);

export default MenuLeft;
