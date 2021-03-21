import React from 'react';
import Image from 'next/image';
import Container from '../../../../components/Container';
import Heading from '../../../../components/Heading';
import Flex from '../../../../components/Flex';
import Box from '../../../../components/Box';
import Hide from '../../../../components/Hide';

const data = [
  {
    key: '邀请团员',
    icon: '/images/icons/inviteMember.svg',
    title: '邀请团员',
  },
  {
    key: '添加商品',
    icon: '/images/icons/addProduct.svg',
    title: '添加商品',
  },
  {
    key: '发起团购',
    icon: '/images/icons/createGroupBuy.svg',
    title: '发起团购',
  },
  {
    key: '管理订单',
    icon: '/images/icons/manageOrder.svg',
    title: '管理订单',
  },
];

const BusinessProcess = () => (
  <>
    <Container>
      <Box pb="1x">
        <Flex justifyContent="center" my="lg">
          <Heading>业务流程</Heading>
        </Flex>
        <Flex
          flexWrap={['wrap', null, 'initial']}
          justifyContent="center"
          px="lg"
        >
          {data.map(({
            key, icon, title,
          }) => (
            <Flex
              key={key}
              width={['50%', null, 'initial']}
              flexDirection="column"
              px={['md', null, '1x']}
            >
              <Box mt="lg">
                <Hide xs sm>
                  <Image src={icon} width={150} height={150} />
                </Hide>
                <Hide md lg>
                  <Flex justifyContent="center">
                    <Image src={icon} width={80} height={80} />
                  </Flex>
                </Hide>
              </Box>
              <Flex flexDirection="column" mt="md">
                <Flex
                  justifyContent="center"
                  textAlign="center"
                >
                  <Heading size={['xs', null, 'sm']}>{title}</Heading>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Container>
  </>
);

export default BusinessProcess;
