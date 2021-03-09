import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from '../../../../components/Link';

const Wrapper = styled.div`
  position: relative;
`;

const LogoWrapper = styled.div`
  position: absolute;
  height: 128px;
  width: 128px;
  left: 0;
  top: 0;
  transform: translateX(-50%);
`;

const Logo = () => (
  <Wrapper>
    <LogoWrapper>
      <Link href="/">
        <Image
          alt="Logo"
          src="/images/logo/logo.svg"
          width={128}
          height={128}
        />
      </Link>
    </LogoWrapper>
  </Wrapper>
);

export default Logo;
