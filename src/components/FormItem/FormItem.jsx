import React from 'react';
import Box from '../Box';
import Text from '../Text';

const FormItem = ({
  name,
  layout,
  label,
  errorMessage,
  children,
}) => {
  const display = {
    inline: 'flex',
    block: 'block',
  }[layout];

  const alignItems = {
    inline: 'center',
    block: null,
  };

  return (
    <Box my={['lg', null, 'md']}>
      <Box display={display} alignItems={alignItems}>
        {label && (
          <Box width="100px" mb="sm">
            <label htmlFor={name}>
              <Text fontSize={['md', null, 'lg']}>{label}</Text>
            </label>
          </Box>
        )}
        <Box flex="1">
          {children}
        </Box>
      </Box>
      <Box display={display} alignItems={alignItems}>
        {label && (
          <Box width="100px" />
        )}
        <div>
          {errorMessage && <Box color="error" mt="xs">{errorMessage}</Box>}
        </div>
      </Box>
    </Box>
  );
};

export default FormItem;
