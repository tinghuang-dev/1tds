import React from 'react';
import { useRouter } from 'next/router';
import GoogleMapReact from 'google-map-react';
import Container from '../../components/Container';
import Title from '../../components/Title';
import CaptainList from './CaptainList';
import useCaptains from './hooks/useCaptains';
import Flex from '../../components/Flex';
import Icon from '../../components/Icon';

const MELBOURNE_GEO_LOCATION = {
  center: {
    lat: -37.81,
    lng: 144.96,
  },
  zoom: 15,
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
      {(lat && lng) ? (
        <Container>
          <Flex height="100vh" minHeight="550px">
            <CaptainList captains={captains} />
            <Flex flex="1">
              <GoogleMapReact
                defaultCenter={MELBOURNE_GEO_LOCATION.center}
                defaultZoom={MELBOURNE_GEO_LOCATION.zoom}
                center={currentLocation}
              >
                <Icon
                  name="mapMarkerAlt"
                  size="2x"
                  lat={lat}
                  lng={lng}
                  color="red"
                />
                <Icon
                  name="storeMark"
                  size="2x"
                  lat={-37.808}
                  lng={144.965}
                  color="red"
                />
                <Icon
                  name="mapPin"
                  size="2x"
                  lat={-37.809}
                  lng={144.965}
                  color="red"
                />
              </GoogleMapReact>
            </Flex>
          </Flex>
        </Container>
      ) : (
        <Icon variant="naked" name="loading" />
      )}
    </>
  );
};

export default MapPage;
