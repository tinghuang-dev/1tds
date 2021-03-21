import React from 'react';
import Image from 'next/image';
import Container from '../../../../components/Container';
import Heading from '../../../../components/Heading';
import Box from '../../../../components/Box';
import Flex from '../../../../components/Flex';
import Paragraph from '../../../../components/Paragraph/Paragraph';
import Hide from '../../../../components/Hide';

const data = [
  {
    key: '运营支持',
    icon: '/images/icons/supportBusiness.svg',
    title: '提供运营支持',
    content: '专业运营团队手把手教学，让你无经验上手无压力。',
  },
  {
    key: '管理生意',
    icon: '/images/icons/manageBusiness.svg',
    title: '轻松管理生意',
    content:
      '简单快速处理订单，高效会员管理系统。可视化数据分析让你的生意如虎添翼。',
  },
  {
    key: '海量客户',
    icon: '/images/icons/moreCustomer.svg',
    title: '海量优质客户',
    content:
      '平台采用邀请制，聚集了大量有经验的优质团购客户，让你轻松扩展社交圈，好东西不愁没销路。',
  },
  {
    key: '实现价值',
    icon: '/images/icons/reachGoal.svg',
    title: '实现人生价值',
    content:
      '如果你有一颗服务邻里的心，又或者追求精品美食且喜欢分享。在这里你不仅可以收获一份可观的收入，同时也会获得一份来自邻里的尊敬与情谊。',
  },
];

const Benefits = () => (
  <div id="info">
    <Container>
      <Box
        py="1x"
        px={['lg', null, '2x']}
        bg={['secondary', null, 'white']}
      >
        <Heading>平台优势</Heading>
        <Hide xs sm>
          <Flex flexWrap="wrap" my="lg">
            {data.map(({
              key, icon, title, content,
            }) => (
              <Flex
                width="50%"
                py="xs"
                px="sm"
                my="md"
                key={key}
              >
                <Box mr="lg">
                  <Image src={icon} width={100} height={100} />
                </Box>
                <Flex flexDirection="column" flex="1">
                  <Heading size="sm">{title}</Heading>
                  <Box>
                    <Paragraph>{content}</Paragraph>
                  </Box>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Hide>
        <Hide md lg>
          <Flex
            justifyContent="center"
            flexWrap="wrap"
            my="lg"
          >
            {data.map(({
              key, icon, title,
            }) => (
              <Flex
                bg="lightSecondary"
                borderRadius="default"
                alignItems="center"
                py="sm"
                px="md"
                m="md"
                key={key}
              >
                <Box mr="md">
                  <Image src={icon} width={50} height={50} />
                </Box>
                <Flex flexDirection="column" flex="1">
                  <Heading size="sm">{title}</Heading>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Hide>
      </Box>
    </Container>
  </div>
);

export default Benefits;
