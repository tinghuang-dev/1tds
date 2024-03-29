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
  const alignItems = {
    inline: 'center',
  };

  return (
    <Box my={['sm', null, 'md']}>
      <Box display={layout} alignItems={alignItems}>
        {label && (
          <Box width="100px" mb={layout !== 'flex' ? ['xs', null, 'sm'] : 0}>
            <label htmlFor={name}>
              <Text>{label}</Text>
            </label>
          </Box>
        )}
        <Box flex="1">
          {children}
        </Box>
      </Box>
      <Box display={layout} alignItems={alignItems}>
        {label && (
          <Box width="100px" />
        )}
        <div>
          {errorMessage && (
            <Box color="error" mt="xs" fontSize={['sm', null, 'md']}>
              {errorMessage}
            </Box>
          )}
        </div>
      </Box>
    </Box>
  );
};

export default FormItem;
