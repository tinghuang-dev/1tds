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

const BusinessInfo = ({ user }) => (
  <ContentContainer>
    <TitleContainer>
      <Heading size="sm">经营信息</Heading>
      <Button size="sm" type="submit" variant="primary">
        修改信息
      </Button>
    </TitleContainer>

    <DataContainer>
      <FormItem layout="inline" label="手机">
        <Input readOnly value={user.mobile} />
      </FormItem>
      <FormItem layout="inline" label="地址">
        <Input readOnly value={user.address} />
      </FormItem>
    </DataContainer>
  </ContentContainer>
);
export default BusinessInfo;
