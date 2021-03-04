import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from '../../../../components/Link';

const Wrapper = styled.div`
  position: relative;
`;

const SemiCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  height: 120px;
  width: 120px;
  background: white;
  border-bottom: 1px solid #dadada;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(-50%);
`;

const Logo = () => (
  <Wrapper>
    <SemiCircle>
      <Link href="/">
        <Image
          alt="Logo"
          src="/images/logo/logo.svg"
          width={75}
          height={110}
        />
      </Link>
    </SemiCircle>
  </Wrapper>
);

export default Logo;
