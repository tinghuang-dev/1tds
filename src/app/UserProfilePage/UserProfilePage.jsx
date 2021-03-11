import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container/Container';
import ProfileNav from './components/ProfileNav';
import ProfileContent from './components/ProfileContent';

const UserProfileContainer = styled(Container)`
  display: flex;
`;

const UserProfilePage = () => (
  <UserProfileContainer>
    <ProfileNav />
    <ProfileContent />
  </UserProfileContainer>
);
export default UserProfilePage;
