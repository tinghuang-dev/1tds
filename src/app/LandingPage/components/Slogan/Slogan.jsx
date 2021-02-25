import React from 'react';
import styled from 'styled-components';

const Banner = styled.div`
  display: flex;
  flex-direction: row;
`;

const Heading = styled.div`
    text-align: left;
    font-size: 28px;
    letter-spacing: 8px;
    font-weight: 300;
    font-family: ZCOOL KuaiLe;
    color: #202020;
`;

const Slogan = () => (
  <Banner>
    <Heading>
      <h1>看看附近在团些什么好东西吧!</h1>
    </Heading>
  </Banner>
);
export default Slogan;
