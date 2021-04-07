import React from 'react';
import Image from 'next/image';
import Box from '../../components/Box';
import Container from '../../components/Container';
import Flex from '../../components/Flex';
import Link from '../../components/Link';

const Footer = () => (
  <Box
    bg="#4f4f4f"
    left="0"
    right="0"
  >
    <Container>
      <Flex pt="lg" justifyContent="center">
        <Image
          alt="Logo"
          src="/images/logo/LogoWithoutCircle.svg"
          width={20}
          height={20}
        />
        <Box ml="sm" color="white" fontFamily="ZCOOL KuaiLe">
          一团袋鼠
        </Box>
      </Flex>
      <Box
        mt="md"
        borderBottom="@1"
        borderColor="white"
        pb="lg"
      >
        <Flex justifyContent="center">
          <Box color="white" mr="md">
            <Link href="/" variant="text">
              搜索
            </Link>
          </Box>
          <Box color="white" mr="md">
            <Link href="/become-a-captain" variant="text">
              成为团长
            </Link>
          </Box>
          <Box color="white" mr="md">
            <Link href="/faq" variant="text">
              常见问题
            </Link>
          </Box>
          <Box color="white">
            <Link href="/user/profile" variant="text">
              账户管理
            </Link>
          </Box>
        </Flex>
      </Box>
      <Box py="md">
        <Flex justifyContent="start">
          <Box color="white">
            © 2021 一团袋鼠 All rights reserved
          </Box>
        </Flex>
      </Box>
    </Container>
  </Box>
);

export default Footer;
