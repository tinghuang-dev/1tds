import Image from 'next/image';
import React from 'react';
import Box from '../../components/Box';
import Link from '../../components/Link';

const Logo = () => (
  <Box position="relative">
    <Box
      position="absolute"
      top="0"
      left="0"
      transform="translateX(-50%)"
      width="100px"
      height="100px"
    >
      <Link href="/">
        <Image
          alt="Logo"
          src="/images/logo/logo.svg"
          width={128}
          height={128}
        />
      </Link>
    </Box>
  </Box>
);

export default Logo;
