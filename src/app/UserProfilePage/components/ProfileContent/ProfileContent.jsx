import React from 'react';
import styled from 'styled-components';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import BusinessInfo from './BusinessInfo/BusinessInfo';

const ProfileContentContainer = styled.div`
  padding: 100px 48px;
  flex: 1;
`;

const ProfileNav = () => (
  <ProfileContentContainer>
    <PersonalInfo />
    <BusinessInfo />
  </ProfileContentContainer>
);
export default ProfileNav;
