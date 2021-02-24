import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import Form from './components/Form';

const StyledBecomeACaptainPage = styled.div`
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
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 4px;
  margin-bottom: 52px;
`;

const InfoLink = styled.a`
  font-family: ZCOOL KuaiLe;
  font-size: 18px;
  color: #6097E6;

  &:hover {
    cursor: pointer;
  }
`;

export default function BecomeACaptainPage() {
  return (
    <StyledBecomeACaptainPage>
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
            <InfoLink>了解更多</InfoLink>
          </InfoLinkContainer>

          <Form />
        </BecomeACaptain>
      </Container>
    </StyledBecomeACaptainPage>
  );
}
