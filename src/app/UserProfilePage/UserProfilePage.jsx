import React, { useEffect, useState } from 'react';
import getUser from '../../apis/auth/getUser';
import Title from '../../components/Title';
import ProfileContent from './components/ProfileContent';
import ProfileNav from './components/ProfileNav';
import Flex from '../../components/Flex';
import Container from '../../components/Container';
import Hide from '../../components/Hide';
import withAuth from '../../components/withAuth';

const UserProfilePage = () => {
  const [response, setResponse] = useState();

  useEffect(() => {
    const getUserDetails = async () => {
      const data = await getUser();
      setResponse(data);
    };

    getUserDetails();
  }, []);

  return (
    <>
      <Title>用户信息｜用户中心</Title>
      <Container>
        <Flex mt={['lg', null, '0']}>
          <Hide xs sm>
            <ProfileNav />
          </Hide>
          <ProfileContent response={response} setResponse={setResponse} />
        </Flex>
      </Container>
    </>
  );
};

export default withAuth(UserProfilePage);
