import React from 'react';
import Image from 'next/image';
import Heading from '../Heading';
import Icon from '../Icon';
import Overlay from '../Overlay';
import Flex from '../Flex';
import Box from '../Box';
import Text from '../Text';

const LoadingState = ({ heading, text }) => (
  <Overlay bg="white">
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Image
        alt="Logo"
        src="/images/logo/LogoWithoutCircle.svg"
        width={128}
        height={128}
      />
      <Box pt="lg" pb="md">
        <Heading size="lg">
          {heading}
        </Heading>
      </Box>
      <Box pb="1x">
        <Text fontSize="lg">
          {text}
        </Text>
      </Box>
      <Icon spin variant="naked" name="loading" size="3x" />
    </Flex>
  </Overlay>
);

export default LoadingState;
