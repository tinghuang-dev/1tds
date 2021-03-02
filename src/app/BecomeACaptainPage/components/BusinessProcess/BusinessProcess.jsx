import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Container from '../../../../components/Container';
import Heading from '../../../../components/Heading';

const ProcessContainer = styled(Container)`
  padding-bottom: 80px;
  box-sizing: border-box;
`;

const ProcessTitle = styled(Heading)`
  text-align: center;
  margin: 32px auto;
`;

const ProcessRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 40px;
`;

const ProcessCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
`;

const CardImage = styled.div`
  width: 150px;
  height: 150px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  margin-top: 20px;
`;

const ContentTitle = styled(Heading)`
  text-align: center;
  margin: 0 auto;
`;

const ContentDescription = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 16px;
`;

const data = [
  {
    key: '邀请团员',
    icon: '/images/icons/inviteMember.svg',
    title: '邀请团员',
    content: '通过发送指定链接',
  },
  {
    key: '添加商品',
    icon: '/images/icons/addProduct.svg',
    title: '添加商品',
    content: '将商品加入列表',
  },
  {
    key: '发起团购',
    icon: '/images/icons/createGroupBuy.svg',
    title: '发起团购',
    content: '进行销售',
  },
  {
    key: '管理订单',
    icon: '/images/icons/manageOrder.svg',
    title: '管理订单',
    content: '管理库存与订单',
  },
];

const BusinessProcess = () => (
  <>
    <ProcessContainer>
      <ProcessTitle>业务流程</ProcessTitle>
      <ProcessRow>
        {data.map(({
          key, icon, title, content,
        }) => (
          <ProcessCard key={key}>
            <CardImage>
              <Image src={icon} width={150} height={150} />
            </CardImage>
            <CardContent>
              <ContentTitle size="sm">{title}</ContentTitle>
              <ContentDescription>{content}</ContentDescription>
            </CardContent>
          </ProcessCard>
        ))}
      </ProcessRow>
    </ProcessContainer>
  </>
);

export default BusinessProcess;
