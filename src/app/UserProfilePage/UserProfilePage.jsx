import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../../components/Container/Container';
import ProfileNav from './components/ProfileNav';
import ProfileContent from './components/ProfileContent';
import Title from '../../components/Title';
import getUser from '../../apis/auth/getUser';
import LoadingState from '../EmailVerifyPage/components/LoadingState';

const UserProfileContainer = styled(Container)`
  display: flex;
`;

const UserProfilePage = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const { data } = await getUser();
        setUser(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    getUserDetails();
  }, []);

  return (
    <>
      <Title>账户信息｜用户中心</Title>
      <UserProfileContainer>
        <ProfileNav />
        {user ? (
          <ProfileContent user={user} />
        ) : (<LoadingState heading="正在加载" />)}
      </UserProfileContainer>
    </>
  );
};
export default UserProfilePage;
