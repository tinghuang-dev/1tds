import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Container from '../../../../components/Container';
import Heading from '../../../../components/Heading';

const BenefitContainer = styled(Container)`
  padding: 80px 140px;
  box-sizing: border-box;
`;

const BenefitCardRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 40px;
`;

const BenefitCard = styled.div`
  display: flex;
  flex: 1 0 50%;
  padding: 4px 8px;
  margin: 20px 0;
  border-radius: 8px;
  align-items: center;
`;

const CardIcon = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 32px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ContentTitle = styled(Heading)`
  letter-spacing: 0px;
`;

const ContentDescription = styled.div`
  margin-top: 12px;
  line-height: 1.8;
  margin-top: 20px;
`;

const data = [
  {
    key: '运营支持',
    icon: '/images/icons/supportBusiness.svg',
    title: '运营支持',
    content: '专业运营团队手把手教学，让你无经验上手无压力。',
  },
  {
    key: '管理生意',
    icon: '/images/icons/manageBusiness.svg',
    title: '轻松管理你的生意',
    content:
      '简单快速处理订单，高效会员管理系统。可视化数据分析让你的生意如虎添翼。',
  },
  {
    key: '海量客户',
    icon: '/images/icons/moreCustomer.svg',
    title: '海量优质客户',
    content:
      '平台采用邀请制，聚集了大量有经验的优质团购客户，让你轻松扩展社交圈，好东西不愁没销路。',
  },
  {
    key: '实现价值',
    icon: '/images/icons/reachGoal.svg',
    title: '实现人生价值',
    content:
      '如果你有一颗服务邻里的心，又或者追求精品美食且喜欢分享。在这里你不仅可以收获一份可观的收入，同时也会获得一份来自邻里的尊敬与情谊。',
  },
];

const Benefits = () => (
  <div id="info">
    <BenefitContainer>
      <Heading>平台优势</Heading>
      <BenefitCardRow>
        {data.map(({
          key, icon, title, content,
        }) => (
          <BenefitCard key={key}>
            <CardIcon>
              <Image src={icon} width={100} height={100} />
            </CardIcon>
            <CardContent>
              <ContentTitle size="sm">{title}</ContentTitle>
              <ContentDescription>{content}</ContentDescription>
            </CardContent>
          </BenefitCard>
        ))}
      </BenefitCardRow>
    </BenefitContainer>
  </div>
);

export default Benefits;
