import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Name = styled.a`
  font-family: ZCOOL KuaiLe;
  color: #C97A40;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 20px;
  letter-spacing: 20px;
  margin-left: 50px;
`;

const LogoName = () => (
  <Link href="/" passHref>
    <Name>一团袋鼠</Name>
  </Link>
);

export default LogoName;
