import React, { useState } from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import MessageBox from '../../components/MessageBox';
import resendEmail from '../../apis/auth/resendEmail';
import Box from '../../components/Box';
import HintMessage from '../../components/HintMessage';

export default function PendingEmailConfirmationModal({
  email,
  onClose,
}) {
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
    <Modal title="验证邮件已发送" onClose={onClose} size="default">
      {response && (
        <MessageBox variant={(response.status !== 201) && 'error'}>
          {{
            201: '已重新发送邮件',
          }[response.status] || '邮件发送失败，请稍后再试'}
        </MessageBox>
      )}

      <Box
        fontSize="lg"
        py="sm"
        lineHeight="loose"
        borderBottom="@1"
        borderBottomColor="border"
        textAlign="center"
      >
        请点击邮件中的确认链接完成验证
      </Box>

      <Box mt="md" fontSize="lg">
        没有收到确认邮件？
      </Box>

      <Box fontSize="lg" my="md" lineHeight="loose">
        检查下面邮箱是否正确，若错误请
        <Button variant="link" onClick={onClose}>
          重新注册
        </Button>
      </Box>

      <Input readOnly value={email} />

      <Box textAlign="center" mt="lg">
        <Button loading={!response && touched} onClick={handleClick}>
          重新发送
        </Button>
      </Box>
      <HintMessage />

      <Box textAlign="center" mt="lg" color="#4F4F4F">*生成的链接仅在24小时内有效</Box>
    </Modal>
  );
}
