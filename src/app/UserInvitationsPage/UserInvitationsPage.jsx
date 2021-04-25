import React, { useState, useEffect } from 'react';
import Title from '../../components/Title';
import UserPageNav from '../../components/UserPageNav';
import Flex from '../../components/Flex';
import Container from '../../components/Container';
import Hide from '../../components/Hide';
import withAuth from '../../components/withAuth';
import getInvitations from '../../apis/users/getInvitations/getInvitations';
import InvitedMemberInfo from './components/InvitedMemberInfo';
import PendingMemberInfo from './components/PendingMemberInfo';
import Box from '../../components/Box';
import Icon from '../../components/Icon';

const UserInvitationsPage = ({ auth }) => {
  const [response, setResponse] = useState();
  const [invitations, setInvitations] = useState();

  const userId = auth.id;

  useEffect(() => {
    const getUserDetails = () => {
      getInvitations(userId)
        .then((res) => {
          setResponse(res);
          return res;
        })
        .then((res) => setInvitations(res.data.invitations));
    };

    getUserDetails();
  }, [userId]);

  return (
    <>
      <Title>邀请信息｜用户邀请</Title>
      <Container>
        <Flex mt={['lg', null, '0']}>
          <Hide xs sm>
            <UserPageNav />
          </Hide>
          <Box flex="1" py="1x" px={['md', null, '1x']}>
            {response ? (
              <Box>
                <Box pb="lg">
                  <InvitedMemberInfo invitations={response.data.invitations} />
                </Box>
                <PendingMemberInfo
                  invitations={invitations}
                  userId={userId}
                  onInvitationDelete={(id) => (
                    setInvitations((prevInvitations) => (
                      prevInvitations.filter((i) => i.id !== id)
                    ))
                  )}
                />
              </Box>
            ) : (
              <Icon variant="naked" name="loading" />
            )}
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default withAuth(UserInvitationsPage);
