import React from 'react';
import styled from 'styled-components';
import FormItem from '../../../../../components/FormItem';
import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';
import Heading from '../../../../../components/Heading';

const ContentContainer = styled.div`
  margin: 10px 0;
`;

const TitleContainer = styled.div`
  border-bottom: solid 1px #000000;
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DataContainer = styled.div`
  padding: 20px 0;
`;

const data = [
  {
    key: 'mobile',
    label: '手机',
    value: '0419238119',
  },
  {
    key: 'address',
    label: '地址',
    value: '620 Breanne Centers, Mt Waverley, VIC 3149',
  },
];

const BusinessInfo = () => (
  <ContentContainer>
    <TitleContainer>
      <Heading size="sm">经营信息</Heading>
      <Button size="sm" type="submit" variant="primary">
        修改信息
      </Button>
    </TitleContainer>

    <DataContainer>
      {data.map(({ key, label, value }) => (
        <FormItem key={key} layout="inline" label={label}>
          <Input readOnly value={value} />
        </FormItem>
      ))}
    </DataContainer>
  </ContentContainer>
);
export default BusinessInfo;
