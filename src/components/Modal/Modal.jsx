import React from 'react';
import { createPortal } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Box from '../Box';
import Button from '../Button';
import Flex from '../Flex';
import Heading from '../Heading';
import Icon from '../Icon';
import Overlay from '../Overlay';

const HideBodyOverflow = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export default function Modal({
  title,
  onClose,
  children,
  size,
}) {
  const width = {
    sm: '400px',
    default: '550px',
    lg: '750px',
  }[size];

  const padding = {
    sm: 'lg',
    default: '1x',
    lg: '2x',
  }[size];

  return createPortal(
    <>
      <HideBodyOverflow />
      <Overlay bg="semitransparent">
        <Box
          width={['100%', null, width]}
          height={['100%', null, 'auto']}
          p={padding}
          bg="white"
          borderRadius={[null, null, 'default']}
          position="relative"
        >
          <Box position="absolute" top="md" right="md">
            <Button type="button" variant="naked" onClick={onClose}>
              <Icon name="closeCircle" size="2x" />
            </Button>
          </Box>
          <div>
            {title && (
              <Flex justifyContent="center" mb="lg">
                <Heading size="md">{title}</Heading>
              </Flex>
            )}
            {children}
          </div>
        </Box>
      </Overlay>
    </>,
    document.getElementById('modal-root'),
  );
}
