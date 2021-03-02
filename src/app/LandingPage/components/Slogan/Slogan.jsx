import React from 'react';
import styled from 'styled-components';
import Heading from '../../../../components/Heading';

const Banner = styled.div`
  display: flex;
  flex-direction: row;
`;

const SloganWrapper = styled.div`
  padding: 36px 0px;
`;

const Slogan = () => (
  <Banner>
    <SloganWrapper>
      <Heading size="xl">看看附近在团些什么好东西吧!</Heading>
    </SloganWrapper>
  </Banner>
);
export default Slogan;
