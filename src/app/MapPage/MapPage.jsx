import React from 'react';
import { useRouter } from 'next/router';
import GoogleMapReact from 'google-map-react';
import Container from '../../components/Container';
import Title from '../../components/Title';
import CaptainList from './CaptainList';
import useCaptains from './hooks/useCaptains';
import Flex from '../../components/Flex';

const MELBOURNE_GEO_LOCATION = {
  center: {
    lat: -37.81,
    lng: 144.96,
  },
  zoom: 10,
};

const MapPage = () => {
  const captains = useCaptains();
  const { query } = useRouter();

  const lat = parseFloat(query.lat);
  const lng = parseFloat(query.lng);

  const currentLocation = (lat && lng) && {
    lat,
    lng,
  };

  return (
    <>
      <Title>主页</Title>
      <Container>
        <Flex>
          <CaptainList captains={captains} />
          <Flex flex="1">
            <GoogleMapReact
              defaultCenter={MELBOURNE_GEO_LOCATION.center}
              defaultZoom={MELBOURNE_GEO_LOCATION.zoom}
              center={currentLocation}
            />
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default MapPage;
