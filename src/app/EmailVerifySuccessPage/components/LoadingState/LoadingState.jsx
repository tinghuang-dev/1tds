import React from 'react';
import Image from 'next/image';
import Heading from '../../../../components/Heading';
import Icon from '../../../../components/Icon';
import Overlay from '../../../../components/Overlay';
import Flex from '../../../../components/Flex';
import Box from '../../../../components/Box';
import Text from '../../../../components/Text';

const LoadingState = () => (
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
        <Heading size="lg">激活账号</Heading>
      </Box>
      <Box pb="1x">
        <Text fontSize="lg">
          正在激活您的账号，请耐心等待。
        </Text>
      </Box>
      <Icon spin variant="naked" name="loading" size="3x" />
    </Flex>
  </Overlay>
);

export default LoadingState;
