import React from 'react';
import Heading from '../Heading';
import Link from '../Link';
import Logo from '../../app/Logo';
import Overlay from '../Overlay';
import Flex from '../Flex';
import Box from '../Box';

const ModalPage = ({ title, children }) => (
  <Overlay bg="grey">
    <Flex
      flexDirection="column"
      bg="white"
      borderRadius="default"
      width="600px"
    >
      <Box borderBottom="@1" borderBottomColor="border">
        <Flex
          position="relative"
          height="50px"
          justifyContent="center"
        >
          <Logo />
          <Box position="absolute" left="lg" top="md">
            <Link href="/" variant="primary">
              一团袋鼠
            </Link>
          </Box>
        </Flex>
      </Box>
      <Flex
        flexDirection="column"
        textAlign="center"
        px="1x"
        pt="2x"
        pb="lg"
      >
        <Heading size="1x">{title}</Heading>
        {children}
      </Flex>
    </Flex>
  </Overlay>
);

export default ModalPage;
