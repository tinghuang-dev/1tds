import React from 'react';
import styled from 'styled-components';
import Slogan from './components/Slogan/Slogan';
import SearchBar from './components/SearchBar/SearchBar';
import Container from '../../components/Container/Container';

const HomePageContainer = styled(Container)`
    box-sizing: border-box;
    padding: 220px;
    height: 500px;
    margin-bottom: 100px; 
    position: relative;
`;

const LandingPage = () => (
  <HomePageContainer>
    <Slogan />
    <SearchBar />
  </HomePageContainer>
);
export default LandingPage;
