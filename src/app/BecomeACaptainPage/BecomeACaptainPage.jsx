import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import Link from '../../components/Link';
import Benefits from './components/Benefits';
import BusinessProcess from './components/BusinessProcess';
import CaptainLinkBlock from './components/CaptainLinkBlock';
import Form from './components/Form';

const FormWrapper = styled.div`
  background-color: lightblue;
`;

const BecomeACaptain = styled.div`
  width: 50%;
  background: #FCEAC6;
  padding: 40px 48px;
`;

const Title = styled.h1`
  font-family: 'ZCOOL KuaiLe';
  font-size: 56px;
  margin: 20px 0;
  font-weight: 400;
  text-align: center;
`;

const Introduction = styled.div`
  margin: 20px 0;
  line-height: 1.75;
`;

const InfoLinkContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 4px;
  margin-bottom: 52px;
`;

export default function BecomeACaptainPage() {
  return (
    <>
      <FormWrapper>
        <Container>
          <BecomeACaptain>
            <Title>
              团购主理人
            </Title>

            <Introduction>
              实现自身价值，工作顾家两不误。
              帮你打造社区邻里间的超值社区电商。
              你只需要维护社群，建群拼团，分享好物。
              我们提供一站式帮扶指导，并提供优质社区客户，让你居家就能做生意！
            </Introduction>

            <InfoLinkContainer>
              <Link href="#info">了解更多</Link>
            </InfoLinkContainer>

            <Form />
          </BecomeACaptain>
        </Container>
      </FormWrapper>

      <Benefits />
      <BusinessProcess />
      <CaptainLinkBlock />
    </>
  );
}
