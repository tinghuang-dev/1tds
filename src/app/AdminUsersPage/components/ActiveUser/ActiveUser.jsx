import React, { useState } from 'react';
import activateUser from '../../../../apis/admin/activateUser';
import Button from '../../../../components/Button';
import Flex from '../../../../components/Flex';
import useMessage from '../../../../hooks/useMessage';

function ActiveUser({ userId, onDone }) {
  const [response, setResponse] = useState();
  const [touched, setTouched] = useState();

  const message = useMessage();

  const handleClick = () => {
    setResponse();
    setTouched(true);

    activateUser(userId)
      .then(setResponse)
      .then(() => {
        onDone();
        message.success('激活账户成功！');
      })
      .catch(() => {
        onDone();
        message.error('激活账户失败！请稍后重试');
      });
  };
  return (
    <Flex justifyContent="center" mt="lg">
      <Button
        size="md"
        onClick={() => handleClick()}
        loading={!response && touched}
      >
        确认激活
      </Button>
    </Flex>
  );
}

export default ActiveUser;
