import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Box from '../../components/Box';
import ModalPage from '../../components/ModalPage';
import getInvitedEmail from '../../apis/auth/getInvitedEmail';
import Icon from '../../components/Icon';
import Form from './components/MemberActiveForm';

function MemberActivePage() {
  const { query: { token } } = useRouter();
  const [response, setResponse] = useState();

  useEffect(() => {
    if (!token) {
      return;
    }

    getInvitedEmail(token).then(setResponse);
  }, [token]);

  return (
    <ModalPage title="成为团员">
      <Box mt="md">
        请填写账户信息
      </Box>
      <Box py="lg">
        {response ? (
          <Form email={response.data.email} />
        ) : (
          <Icon name="loading" />
        )}
      </Box>
    </ModalPage>
  );
}

export default MemberActivePage;
