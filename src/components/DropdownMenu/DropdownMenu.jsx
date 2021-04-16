import React from 'react';
import Box from '../Box';
import ClickOutside from '../ClickOutside';

const DropdownMenu = ({
  onClose,
  children,
  placement,
}) => {
  const placementPosition = {
    left: {
      left: '0',
    },
    right: {
      right: '0',
    },
  }[placement || 'left'];

  return (
    <ClickOutside onOutsideClick={onClose}>
      <Box
        width="100px"
        py="sm"
        bg="white"
        fontSize="md"
        position="absolute"
        zIndex="popup"
        borderRadius="default"
        border="@1"
        borderColor="border"
        onClick={onClose}
        mt="xs"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...placementPosition}
      >
        {children}
      </Box>
    </ClickOutside>
  );
};

export default DropdownMenu;
