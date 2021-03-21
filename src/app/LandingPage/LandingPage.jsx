import Router, { useRouter } from 'next/router';
import React from 'react';
import Box from '../../components/Box';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import UserAuthModals from '../UserAuthModals';
import SearchBar from './components/SearchBar/SearchBar';
import Slogan from './components/Slogan/Slogan';

const LandingPage = () => {
  const { query } = useRouter();

  return (
    <>
      <Title />
      <Container>
        <Box px={['md', null, '3x']} mt={['2x', null, '3x']}>
          <Slogan />
          <SearchBar />
        </Box>
      </Container>
      {query.slugs?.[0] === 'login' && <UserAuthModals onClose={() => Router.push('/', { shallow: true })} />}
    </>
  );
};
export default LandingPage;
