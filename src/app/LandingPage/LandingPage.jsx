import React from 'react';
import styled from 'styled-components';
import Slogan from './components/Slogan/Slogan';
import SearchBar from './components/SearchBar/SearchBar';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';

const HomePageContainer = styled(Container)`
    box-sizing: border-box;
    padding: 220px;
    height: 500px;
    margin-bottom: 100px; 
    position: relative;
`;

const LandingPage = () => (
  <>
    <Title />
    <HomePageContainer>
      <Slogan />
      <SearchBar />
    </HomePageContainer>
  </>
);
export default LandingPage;
