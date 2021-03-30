import React from 'react';
import Box from '../../../../components/Box';
import Icon from '../../../../components/Icon';
import BusinessInfo from './BusinessInfo/BusinessInfo';
import PersonalInfo from './PersonalInfo/PersonalInfo';

const ProfileContent = ({ user, setUser }) => (
  <Box flex="1" py="1x" px="lg">
    {user ? (
      <>
        <PersonalInfo user={user} />
        <BusinessInfo user={user} setUser={setUser} />
      </>
    ) : (
      <Icon variant="naked" name="loading" />
    )}
  </Box>
);
export default ProfileContent;
