import React, { useState } from 'react';
import Button from '../../components/Button';
import Box from '../../components/Box';
import Modal from '../../components/Modal';
import resendEmail from '../../apis/auth/resendEmail';
import Input from '../../components/Input';
import MessageBox from '../../components/MessageBox';
import FormItem from '../../components/FormItem';
import useApi from '../../hooks/useApi';

export default function NotVerifiedEmailModal({ email, onClose }) {
  const [httpRequestStatus, setHttpRequestStatus] = useState();

  const onSuccess = ({ status }) => setHttpRequestStatus(status);

  const onFail = (error) => setHttpRequestStatus(error.status);

  const {
    requesting,
    sendRequest,
  } = useApi(() => resendEmail(email), { onSuccess, onFail });

  return (
    <Modal title="登陆失败" onClose={onClose} size="sm">
      {httpRequestStatus ? (
        <Box mb="md">
          <MessageBox variant={(httpRequestStatus !== 201) && 'error'}>
            {{
              201: '验证信息发送成功',
            }[httpRequestStatus] || '邮件发送失败，请稍后再试'}
          </MessageBox>
        </Box>
      ) : (
        <MessageBox variant="error">
          该账号尚未通过邮箱验证
          <br />
          请检查收件箱并验证
        </MessageBox>
      )}

      <FormItem>
        <Input value={email} readOnly />
      </FormItem>

      <Box textAlign="center" mt="lg">
        <Button variant="secondary" loading={requesting} onClick={sendRequest}>重新发送验证邮件</Button>
      </Box>
    </Modal>
  );
}
