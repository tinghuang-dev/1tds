import React from 'react';
import Link from 'next/link';
import Button from '../../../../components/Button';
import Heading from '../../../../components/Heading';
import Flex from '../../../../components/Flex';
import Box from '../../../../components/Box';
import Container from '../../../../components/Container';

const CaptainLinkBlock = () => (
  <Container>
    <Flex
      py="1x"
      px={['md', null, 'lg']}
      flexDirection="column"
      alignItems="center"
      bg="secondary"
    >
      <Box
        color="darkPrimary"
        mb="1x"
        lineHeight="normal"
        mx={['lg', null, 'initial']}
        width={['initial', null, '600px']}
      >
        <Heading size={['md', null, 'lg']}>
          颠覆传统电商带来社区拼团新体验，顾客就在家门口，居家就能做生意！
        </Heading>
      </Box>
      <Link href="#become-a-captain">
        <a>
          <Button variant="success" size={['md', null, 'lg']}>成为团长</Button>
        </a>
      </Link>
    </Flex>
  </Container>
);

export default CaptainLinkBlock;
