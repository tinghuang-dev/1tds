import React from 'react';
import styled from 'styled-components';
import Button from '../../../../../components/Button/Button';
import FormItem from '../../../../../components/FormItem';
import Input from '../../../../../components/Input';
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

const ChangePasswordButton = styled(Button)`
  margin-left: 20px;
`;

const PersonalInfo = ({ user }) => (
  <ContentContainer>
    <TitleContainer>
      <Heading size="sm">账户信息</Heading>
      <ChangePasswordButton size="sm" type="submit" variant="primary">修改密码</ChangePasswordButton>
    </TitleContainer>
    <DataContainer>
      <FormItem layout="inline" label="邮箱">
        <Input readOnly value={user.email} />
      </FormItem>
    </DataContainer>
  </ContentContainer>
);

export default PersonalInfo;
