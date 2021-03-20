import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getUser from '../../apis/auth/getUser';
import Container from '../../components/Container/Container';
import Title from '../../components/Title';
import ProfileContent from './components/ProfileContent';
import ProfileNav from './components/ProfileNav';

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
      <Title>用户信息｜用户中心</Title>
      <UserProfileContainer>
        <ProfileNav />
        <ProfileContent user={user} />
      </UserProfileContainer>
    </>
  );
};
export default UserProfilePage;
