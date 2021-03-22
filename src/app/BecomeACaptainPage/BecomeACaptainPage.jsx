import React from 'react';
import Container from '../../components/Container';
import Link from '../../components/Link';
import Benefits from './components/Benefits';
import BusinessProcess from './components/BusinessProcess';
import CaptainLinkBlock from './components/CaptainLinkBlock';
import Form from './components/Form';
import Title from '../../components/Title';
import Heading from '../../components/Heading';
import Box from '../../components/Box';

export default function BecomeACaptainPage() {
  return (
    <>
      <Title>成为团长</Title>
      <Box bg={['white', null, 'lightblue']} height={['850px', null, '800px']}>
        <Container>
          <Box
            width={['100%', null, '50%']}
            height={['850px', null, '800px']}
            px="lg"
            py={['1x', null, 'lg']}
            bg={['white', null, 'secondary']}
          >
            <Box textAlign="center" my="md">
              <Heading size={['lg', null, '1x']}>
                成为团长
              </Heading>
            </Box>
            <Box my="md">
              <Box
                lineHeight="loose"
                fontSize={['sm', null, 'initial']}
              >
                实现自身价值，工作顾家两不误。
                帮你打造社区邻里间的超值社区电商。
                你只需要维护社群，建群拼团，分享好物。
                我们提供一站式帮扶指导，并提供优质社区客户，让你居家就能做生意！
              </Box>
            </Box>

            <Box textAlign="right" mb="lg">
              <Link href="#info">了解更多</Link>
            </Box>
            <Form />
          </Box>
        </Container>
      </Box>

      <Benefits />
      <BusinessProcess />
      <CaptainLinkBlock />
    </>
  );
}
