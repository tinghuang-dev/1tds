import React from 'react';
import Button from '../../../../../../components/Button';
import Icon from '../../../../../../components/Icon';
import Box from '../../../../../../components/Box';

function SwitchMapButton({ toggleShowCaptainList }) {
  return (
    <Box mr="sm">
      <Button size="lg" variant="naked" onClick={() => toggleShowCaptainList(false)}>
        <Icon name="switchMap" />
      </Button>
    </Box>
  );
}

export default SwitchMapButton;
