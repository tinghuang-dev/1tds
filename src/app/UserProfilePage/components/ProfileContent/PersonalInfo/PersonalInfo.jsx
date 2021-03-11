import React from 'react';
import styled from 'styled-components';
import Button from '../../../../../components/Button/Button';
import FormItem from '../../../../../components/FormItem';
import Input from '../../../../../components/Input';
import Heading from '../../../../../components/Heading';

const ContentContainer = styled.div`
  margin: 10px 0;
`;

const Title = styled(Heading)`
  border-bottom: solid 1px #000000;
  padding-bottom: 16px;
`;

const DataContainer = styled.div`
  padding: 20px 0;
`;

const ChangePasswordButton = styled(Button)`
  margin-left: 20px;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PersonalInfo = () => (
  <ContentContainer>
    <Title size="sm">账户信息</Title>
    <DataContainer>
      <FormItem layout="inline" label="邮箱">
        <Input readOnly value="zlong@outlook.com" />
      </FormItem>
      <FormItem layout="inline" label="密码">
        <InnerContainer>
          <Input readOnly value="PASSWORD" type="password" />
          <ChangePasswordButton size="sm" type="submit" variant="success">修改密码</ChangePasswordButton>
        </InnerContainer>
      </FormItem>
    </DataContainer>
  </ContentContainer>
);

export default PersonalInfo;
