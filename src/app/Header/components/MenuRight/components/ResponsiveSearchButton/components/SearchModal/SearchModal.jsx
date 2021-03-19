import React from 'react';
import { createPortal } from 'react-dom';
import Box from '../../../../../../../../components/Box';
import Icon from '../../../../../../../../components/Icon';
import Input from '../../../../../../../../components/Input';
import Overlay from '../../../../../../../../components/Overlay';

function SearchModal() {
  return createPortal(
    <Overlay bg="semitransparent">
      <Box
        top="0"
        right="0"
        left="0"
        px="md"
        py="lg"
        position="absolute"
      >
        <Box borderRadius="default" bg="white">
          <Input
            variant="naked"
            suffix={(<Icon name="closeCircle" variant="secondary" />)}
          />
        </Box>
      </Box>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

export default SearchModal;
