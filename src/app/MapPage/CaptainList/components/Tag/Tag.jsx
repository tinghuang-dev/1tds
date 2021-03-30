import React from 'react';
import Box from '../../../../../components/Box';

const Tag = ({ children }) => (
  <Box
    fontFamily="ZCOOL KuaiLe"
    borderRadius="default"
    color="greys.@600"
    bg="darkSecondary"
    px="sm"
    py="xs"
    mr="sm"
  >
    {children}
  </Box>
);

export default Tag;
