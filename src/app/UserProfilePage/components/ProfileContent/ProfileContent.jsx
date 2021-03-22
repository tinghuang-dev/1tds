import React from 'react';
import Box from '../../../../components/Box';
import Icon from '../../../../components/Icon';
import BusinessInfo from './BusinessInfo/BusinessInfo';
import PersonalInfo from './PersonalInfo/PersonalInfo';

const ProfileContent = ({ user }) => (
  <Box flex="1" py="md" px="lg">
    {user ? (
      <>
        <PersonalInfo user={user} />
        <BusinessInfo user={user} />
      </>
    ) : (
      <Icon variant="naked" name="loading" />
    )}
  </Box>
);
export default ProfileContent;
