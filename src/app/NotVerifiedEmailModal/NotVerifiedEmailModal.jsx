import React, { useState } from 'react';
import Button from '../../components/Button';
import Box from '../../components/Box';
import Modal from '../../components/Modal';
import resendEmail from '../../apis/auth/resendEmail';
import Input from '../../components/Input';
import MessageBox from '../../components/MessageBox';
import FormItem from '../../components/FormItem';
import HintMessage from '../../components/HintMessage';

export default function NotVerifiedEmailModal({ email, onClose }) {
  const [response, setResponse] = useState();

  const [touched, setTouched] = useState(false);

  const handleClick = () => {
    setResponse();
    setTouched(true);

    resendEmail(email)
      .then(setResponse)
      .catch(setResponse);
  };

  return (
    <Modal title="登陆失败" onClose={onClose} size="sm">
      {response ? (
        <Box mb="md">
          <MessageBox variant={(response.status !== 201) && 'error'}>
            {{
              201: '验证信息发送成功',
            }[response.status] || '邮件发送失败，请稍后再试'}
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
        <Button
          variant="secondary"
          loading={!response && touched}
          onClick={handleClick}
        >
          重新发送验证邮件
        </Button>
      </Box>
      <HintMessage />
      <Box textAlign="center" mt="lg" color="#4F4F4F">*生成的链接尽在24小时内有效</Box>
    </Modal>
  );
}
