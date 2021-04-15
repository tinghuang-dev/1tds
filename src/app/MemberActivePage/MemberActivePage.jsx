import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Box from '../../components/Box';
import ModalPage from '../../components/ModalPage';
import getInvitedEmail from '../../apis/auth/getInvitedEmail';
import Icon from '../../components/Icon';
import Flex from '../../components/Flex';
import Form from './components/MemberActiveForm';
import MemberActivatedPage from './components/MemberActivatedPage';

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
    <>
      {response ? (
        <>
          {response.data.invitedUserId === null ? (
            <ModalPage title="成为团员">
              <Box mt="md">
                请填写账户信息
              </Box>
              <Box py="lg">
                <Form email={response.data.email} />
              </Box>
            </ModalPage>
          ) : (
            <MemberActivatedPage />
          )}
        </>
      ) : (
        <Flex justifyContent="center" py="3x">
          <Icon spin variant="naked" name="loading" size="3x" />
        </Flex>
      )}
    </>
  );
}

export default MemberActivePage;
