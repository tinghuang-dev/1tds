import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import resendEmail from '../../apis/auth/resendEmail';
import Input from '../../components/Input';
import MessageBox from '../../components/MessageBox';

const StyledMessageBox = styled(MessageBox)`
  margin-bottom: 10px;
`;

const InputWrapper = styled.div`
  margin: 20px auto 40px;
`;

const StyledButton = styled(Button)`
  display: block;
  margin: 0 auto;
`;

export default function NotVerifiedEmailModal({ email, onClose }) {
  const [submitting, setSubmitting] = useState(false);

  const [httpRequestStatus, setHttpRequestStatus] = useState();

  const handleClick = async () => {
    setSubmitting(true);

    try {
      const { status } = await resendEmail(email);

      setHttpRequestStatus(status);
    } catch (error) {
      setHttpRequestStatus(error.status);
    }

    setSubmitting(false);
  };

  return (
    <Modal title="登陆失败" onClose={onClose} size="sm">
      {httpRequestStatus && (
        <StyledMessageBox variant={(httpRequestStatus !== 201) && 'error'}>
          {{
            201: '验证信息发送成功',
          }[httpRequestStatus] || '邮件发送失败，请稍后再试'}
        </StyledMessageBox>
      )}

      请确认注册邮箱是否已验证。如果没有收到验证邮件，请点击下方按钮再次发送验证信息到以下邮箱。

      <InputWrapper>
        <Input value={email} readOnly />
      </InputWrapper>

      <StyledButton loading={submitting} onClick={handleClick}>重新发送验证邮件</StyledButton>
    </Modal>
  );
}
