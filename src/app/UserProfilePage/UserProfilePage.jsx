import React, { useEffect, useState } from 'react';
import getUser from '../../apis/auth/getUser';
import Title from '../../components/Title';
import UserPageNav from '../../components/UserPageNav';
import Flex from '../../components/Flex';
import Container from '../../components/Container';
import Hide from '../../components/Hide';
import withAuth from '../../components/withAuth';
import PersonalInfo from './components/PersonalInfo';
import BusinessInfo from './components/BusinessInfo';
import Icon from '../../components/Icon';
import Box from '../../components/Box';

const UserProfilePage = () => {
  const [response, setResponse] = useState();

  useEffect(() => {
    const getUserDetails = () => {
      getUser()
        .then(setResponse);
    };

    getUserDetails();
  }, []);

  return (
    <>
      <Title>用户信息｜用户中心</Title>
      <Container>
        <Flex mt={['lg', null, '0']}>
          <Hide xs sm>
            <UserPageNav />
          </Hide>
          <Box flex="1" p="1x">
            {response ? (
              <>
                <PersonalInfo userInfo={response.data} />
                <BusinessInfo userInfo={response.data} setUserInfo={setResponse} />
              </>
            ) : (
              <Icon variant="naked" name="loading" />
            )}
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default withAuth(UserProfilePage);
