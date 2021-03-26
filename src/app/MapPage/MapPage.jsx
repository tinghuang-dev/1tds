import React from 'react';
import Title from '../../components/Title';
import Container from '../../components/Container';
import CaptainList from './CaptainList';

const MapPage = () => (
  <>
    <Title>主页</Title>
    <Container>
      <CaptainList />
    </Container>
  </>
);

export default MapPage;
