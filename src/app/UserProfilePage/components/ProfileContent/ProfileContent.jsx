import React from 'react';
import Box from '../../../../components/Box';
import Icon from '../../../../components/Icon';
import BusinessInfo from './BusinessInfo/BusinessInfo';
import PersonalInfo from './PersonalInfo/PersonalInfo';

const ProfileContent = ({ response, setResponse }) => (
  <Box flex="1" py="1x" px="lg">
    {response ? (
      <>
        <PersonalInfo response={response} />
        <BusinessInfo response={response} setResponse={setResponse} />
      </>
    ) : (
      <Icon variant="naked" name="loading" />
    )}
  </Box>
);
export default ProfileContent;
