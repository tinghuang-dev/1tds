import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Left = styled.ul`
  list-style: none;
  padding-left: 0px;
`;
const List = styled.li`
  display: inline-block;
  padding: 0px 32px 0px 0px;
`;
const StyledLink = styled.a`
  color: #C97A40;
  font-family: ZCOOL KuaiLe;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 2px;
`;
const MenuLeft = () => (
  <Left>
    <List>
      <Link href="/" passHref>
        <StyledLink>一团袋鼠</StyledLink>
      </Link>
    </List>
    <List>
      <Link href="/become-a-captain" passHref>
        <StyledLink>成为团长</StyledLink>
      </Link>
    </List>
    <List>
      <Link href="/faq" passHref>
        <StyledLink>常见问题</StyledLink>
      </Link>
    </List>
  </Left>
);

export default MenuLeft;
