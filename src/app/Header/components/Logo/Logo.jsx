import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from '../../../../components/Link';

const Wrapper = styled.div`
  width: 110px;
  position: absolute;
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
  z-index: 1;
  border-bottom: 1px solid rgba(88, 73, 62, 0.2);
`;

const PositionContainer = styled.div`
  position: absolute;
  top: -60px;
`;

const Logo = () => (
  <Wrapper>
    <SemiCircle>
      <PositionContainer>
        <Link href="/">
          <Image
            alt="Logo"
            src="/images/logo/logo.svg"
            width={75}
            height={110}
          />
        </Link>
      </PositionContainer>
    </SemiCircle>
  </Wrapper>
);

export default Logo;
