import React, { useState } from 'react';
import Button from '../../../../../../components/Button';
import Flex from '../../../../../../components/Flex';
import Modal from '../../../../../../components/Modal';
import Box from '../../../../../../components/Box';
import deleteInvitation from '../../../../../../apis/users/deleteInvitation';
import useMessage from '../../../../../../hooks/useMessage';

const DeleteInvitationConfirmModal = ({
  onClose,
  invitationId,
  userId,
  onSuccess,
}) => {
  const [response, setResponse] = useState();
  const [touched, setTouched] = useState();

  const message = useMessage();

  const handleClick = () => {
    setResponse();
    setTouched(true);

    deleteInvitation({ userId, invitationId })
      .then(setResponse)
      .then(() => {
        onClose();
        message.success('删除成功！');
        onSuccess();
      })
      .catch(() => {
        onClose();
        message.error('删除失败，请稍后重试！');
      });
  };

  return (
    <Modal title="是否确认删除" onClose={onClose} size="sm">
      <Flex justifyContent="center" mt="1x">
        <Box mr="md">
          <Button
            size="sm"
            variant="secondary"
            onClick={onClose}
          >
            取消
          </Button>
        </Box>
        <Button
          size="sm"
          onClick={() => handleClick()}
          loading={!response && touched}
        >
          确认
        </Button>
      </Flex>
    </Modal>
  );
};

export default DeleteInvitationConfirmModal;
