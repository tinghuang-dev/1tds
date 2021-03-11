import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../../../../components/Button';

const ProfileNavContainer = styled.div`
  background: #f2f2f2;
  width: 380px;
  padding: 100px 48px;
  display: flex;
  flex-direction: column;
`;

const NavButton = styled(Button)`
  margin: 10px 0;
  background: transparent;
  color: inherit;

  ${(props) => props.active && css`
    background: #EB9050;
    color: #ffffff;
  `}
`;

const ProfileNav = () => (
  <ProfileNavContainer>
    <NavButton active size="lg">
      用户信息
    </NavButton>
    <NavButton size="lg">
      团购管理
    </NavButton>
    <NavButton size="lg">
      团员管理
    </NavButton>
  </ProfileNavContainer>
);
export default ProfileNav;
