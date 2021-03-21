import React from 'react';
import Slogan from './components/Slogan/Slogan';
import SearchBar from './components/SearchBar/SearchBar';
import Container from '../../components/Container/Container';
import Box from '../../components/Box';
import Title from '../../components/Title/Title';

const LandingPage = () => (
  <>
    <Title />
    <Container>
      <Box px={['md', null, '3x']} mt={['2x', null, '3x']}>
        <Slogan />
        <SearchBar />
      </Box>
    </Container>
  </>
);
export default LandingPage;
