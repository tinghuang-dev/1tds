import React from 'react';
import Box from '../Box';

const Hide = ({
  xs,
  sm,
  md,
  lg,
  children,
}) => {
  const display = [xs, sm, md, lg].map((v) => (v ? 'none' : 'initial'));

  return (
    <Box display={display}>
      {children}
    </Box>
  );
};

export default Hide;
