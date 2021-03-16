import React from 'react';
import styled from 'styled-components';
import ModalPage from '../../components/ModalPage';
import Button from '../../components/Button';
import FormItem from '../../components/FormItem';
import Input from '../../components/Input';
import Box from '../../components/Box';

const ConfirmButton = styled(Button)`
  margin-top: 32px;
`;

const ResetPasswordPage = () => (
  <ModalPage title="重置密码">
    <Box mt="md">您正在进行重制密码操作，请输入新密码。</Box>
    <Box py="lg">
      <FormItem layout="inline" label="密码">
        <Input />
      </FormItem>
      <FormItem layout="inline" label="确认密码">
        <Input />
      </FormItem>
      <Box mt="md">
        <ConfirmButton size="md" variant="primary">确认</ConfirmButton>
      </Box>
    </Box>
  </ModalPage>
);

export default ResetPasswordPage;
