import React from 'react';
import styled from 'styled-components';
import Button from '../../../../../../components/Button';
import Modal from '../../../../../../components/Modal';
import Input from '../../../../../../components/Input';

const CallToAction = styled.div`
  display:flex;
  justify-content: center;
  margin-top: 30px;
`;

const LinkWrapper = styled.ul`
  font-size: 18px;
  line-height: 40px;
  margin: 16px 0;
`;

const SentenceWrapper = styled.div`
  padding: 20px 0px;
  font-size: 18px;
  line-height: 30px;
  box-shadow: 0px 1px 0px rgba(88, 73, 62, 0.2);
`;

const ConfirmWrapper = styled.div`
  margin-top: 20px;
  font-size: 18px;
`;

export default function PendingEmailConfirmationModal({
  email,
  onClose,
}) {
  return (
    <Modal title="验证邮件已发送" onClose={onClose}>
      <SentenceWrapper>
        {`验证邮箱已发送到你的邮箱 ${email},`}
        请点击邮件中的确认链接完成验证
      </SentenceWrapper>
      <ConfirmWrapper>
        没有收到确认邮件？
      </ConfirmWrapper>
      <LinkWrapper>
        <li>
          检查上面邮箱是否正确，
          若错误请
          {' '}
          <Button variant="naked" onClick={onClose}>
            重新注册
          </Button>
        </li>
        <li>
          查看是否在邮箱的垃圾箱中
        </li>
        <li>
          稍等几分钟，若仍收不到邮件，重新发送确认邮件
        </li>
      </LinkWrapper>
      <Input readOnly value={email} />
      <CallToAction>
        <Button>
          重新发送
        </Button>
      </CallToAction>
    </Modal>
  );
}
