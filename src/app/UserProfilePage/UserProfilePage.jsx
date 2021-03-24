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
  const [user, setUser] = useState();

  useEffect(() => {
    const getUserDetails = async () => {
      const { data } = await getUser();
      setUser(data);
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
          <ProfileContent user={user} />
        </Flex>
      </Container>
    </>
  );
};

export default withAuth(UserProfilePage);
