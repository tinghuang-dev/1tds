import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const LogoPosition = styled.div`
  position: absolute;
  top: 48px;
  left: 48%;
  z-index: 100;
`;

const SemiCircle = styled.div`
  position: absolute;
  top: 70px;
  border-radius: 0 0 100px 100px;
  height: 63px;
  width: 112px;
  background: white;
  z-index: 50;
`;

const Logo = () => (
  <>
    <LogoPosition>
      <Link href="/">
        <a>
          <Image
            alt="Logo"
            src="/images/logo/logo.svg"
            width={59}
            height={80}
          />
        </a>
      </Link>
    </LogoPosition>
    <SemiCircle />
  </>
);

export default Logo;
