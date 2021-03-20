import React from 'react';
import { createPortal } from 'react-dom';
import Box from '../../../../../../../../components/Box';
import ClickOutside from '../../../../../../../../components/ClickOutside';
import Icon from '../../../../../../../../components/Icon';
import Input from '../../../../../../../../components/Input';
import Overlay from '../../../../../../../../components/Overlay';

function SearchModal({ onClose }) {
  return createPortal(
    <Overlay bg="semitransparent">
      <ClickOutside onOutsideClick={onClose}>
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
      </ClickOutside>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

export default SearchModal;
