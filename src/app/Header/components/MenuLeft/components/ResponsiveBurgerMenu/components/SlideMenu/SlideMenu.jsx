import React from 'react';
import styled from 'styled-components';
import Link from '../../../../../../../../components/Link';

const Nav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 16px 0;
  position: absolute;
  z-index: 9999;
  border-radius: 8px;
  border: 1px solid #dadada;
  background-color: white;
  font-size: 14px;
  left: 0;
  width: 100px;
`;

const Item = styled.li`
  padding: 0 16px;  

  & ~ & {
    margin-top: 16px;
  }
`;

const NavigationLink = styled(Link)`
  color: #C97A40;
`;

const SlideMenu = ({ onClose }) => (
  <Nav onClick={onClose}>
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
  </Nav>
);

export default SlideMenu;
