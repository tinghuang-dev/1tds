import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const LogoPosition = styled.div`
  width: 110px;
  position: absolute;
  z-index: 100;
`;

const SemiCircle = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 33px;
  border-radius: 0 0 100px 100px;
  height: 60px;
  width: 110px;
  background: white;
  z-index: 50;
  border-bottom: 1px solid rgba(88, 73, 62, 0.2);
`;
const LogoContainer = styled.a`
  position: absolute;
  top: -60px;
`;
const Logo = () => (
  <LogoPosition>
    <SemiCircle>
      <Link href="/" passHref>
        <LogoContainer>
          <Image
            alt="Logo"
            src="/images/logo/logo.svg"
            width={75}
            height={110}
          />
        </LogoContainer>
      </Link>
    </SemiCircle>
  </LogoPosition>
);

export default Logo;
