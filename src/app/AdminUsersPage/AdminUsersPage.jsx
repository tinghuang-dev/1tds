import React from 'react';
import styled from 'styled-components';
import Link from '../../components/Link';
import Container from '../../components/Container';

const AdminPage = styled.div`
  display: flex;
  padding: 80px 0;
`;

const Menu = styled.ul`
  width: 250px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: block;
`;

const ItemLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 12px 0 36px;
  height: 50px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const LINKS = [{
  name: '用户管理',
  href: '/admin/users',
}, {
  name: '团购管理',
  href: '/admin/products',
}, {
  name: '订单管理',
  href: '/admin/orders',
}];

export default function AdminUsersPage() {
  return (
    <Container>
      <AdminPage>
        <Menu>
          {LINKS.map(({ name, href }) => (
            <Item key={name}>
              <ItemLink href={href}>{name}</ItemLink>
            </Item>
          ))}
        </Menu>
        <div />
      </AdminPage>
    </Container>
  );
}
