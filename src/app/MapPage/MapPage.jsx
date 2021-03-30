import React from 'react';
import Container from '../../components/Container';
import Title from '../../components/Title';
import CaptainList from './CaptainList';
import useCaptains from './hooks/useCaptains';

const MapPage = () => {
  const captains = useCaptains();

  return (
    <>
      <Title>主页</Title>
      <Container>
        <CaptainList captains={captains} />
      </Container>
    </>
  );
};

export default MapPage;
