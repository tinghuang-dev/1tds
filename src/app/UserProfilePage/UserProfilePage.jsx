import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container/Container';
import ProfileNav from './components/ProfileNav';
import ProfileContent from './components/ProfileContent';
import Title from '../../components/Title';

const UserProfileContainer = styled(Container)`
  display: flex;
`;

const UserProfilePage = () => (
  <>
    <Title>账户信息｜用户中心｜一团袋鼠</Title>
    <UserProfileContainer>
      <ProfileNav />
      <ProfileContent />
    </UserProfileContainer>
  </>
);
export default UserProfilePage;
