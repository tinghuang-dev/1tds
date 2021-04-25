import React, { useState } from 'react';
import resendInvitation from '../../../../../../apis/users/resendInvitation';
import Box from '../../../../../../components/Box';
import Button from '../../../../../../components/Button';
import useMessage from '../../../../../../hooks/useMessage';

const ResendInvitation = ({ userId, member }) => {
  const [response, setResponse] = useState();
  const [memberId, setMemberId] = useState();

  const message = useMessage();

  const onResendInvitationClick = (invitationId) => {
    setResponse();
    setMemberId(invitationId);

    resendInvitation({ userId, invitationId })
      .then(() => {
        message.success('邀请邮件发送成功！');
        setMemberId(false);
      })
      .catch(() => {
        message.error('邀请邮件发送失败，请稍后重试！');
        setMemberId(false);
      });
  };

  return (
    <Box borderRight="@1" color="greys.@400" px="sm">
      <Button
        size="sm"
        variant="naked"
        loading={!response && (member.id === memberId)}
        onClick={() => onResendInvitationClick(member.id)}
      >
        重新发送
      </Button>
    </Box>
  );
};

export default ResendInvitation;
