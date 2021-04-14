import React from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';
import Box from '../../../../components/Box';
import Flex from '../../../../components/Flex';
import Icon from '../../../../components/Icon';

const slideInOut = keyframes`
  0% {top: -24px;}
  25% {top: 8px;}
  75% {
    top: 8px;
    opacity: 1;
  }
  100% {
    top: -24px;
    opacity: 0;
  }
`;

const MessageContainer = styled(Box).attrs({
  position: 'fixed',
  top: '8px',
  left: '50%',
  transform: 'translateX(-50%)',
  bg: 'white',
  p: 'md',
  borderRadius: 'default',
  zIndex: 'popup',
})`
  box-shadow: 0 0 8px 0 grey;
  animation: ${slideInOut} 4s;
`;

export default function Message({ variant, children }) {
  if (!children) {
    return null;
  }

  return createPortal(
    <MessageContainer>
      <Flex>
        <Box pr="sm">
          <Icon
            variant={variant}
            size="lg"
            name={{
              success: 'checkCircle',
              error: 'closeCircle',
            }[variant]}
          />
        </Box>
        {children}
      </Flex>
    </MessageContainer>,
    document.getElementById('message-root'),
  );
}
