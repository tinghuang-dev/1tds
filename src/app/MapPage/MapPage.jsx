import React from 'react';
import { useRouter } from 'next/router';
import GoogleMapReact from 'google-map-react';
import useToggler from '../../hooks/useToggler';
import Container from '../../components/Container';
import Title from '../../components/Title';
import CaptainList from './components/CaptainList';
import SearchBar from './components/SearchBar';
import useCaptains from './hooks/useCaptains';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Icon from '../../components/Icon';
import Hide from '../../components/Hide';

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
  const [showCaptainList, toggleShowCaptainList] = useToggler(true);

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
          <Flex maxHeight="100vh" minHeight="600px">
            <Box
              position="absolute"
              zIndex="@100"
              width={['100%', null, 400]}
              borderLeft="@1"
              borderRight="@1"
              borderColor="border"
            >
              <SearchBar toggleShowCaptainList={toggleShowCaptainList} />
            </Box>
            {showCaptainList ? (
              <Box
                width={['100%', null, 400]}
                border="@1"
                borderColor="border"
                mt={['100px', null, '1x']}
              >
                <CaptainList captains={captains} />
              </Box>
            ) : (
              <Box flex="1">
                <Hide md lg>
                  <GoogleMapReact
                    defaultCenter={MELBOURNE_GEO_LOCATION.center}
                    defaultZoom={MELBOURNE_GEO_LOCATION.zoom}
                    center={currentLocation}
                  >
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
                    <Icon
                      name="mapMarkerAlt"
                      size="2x"
                      lat={lat}
                      lng={lng}
                      color="red"
                    />
                  </GoogleMapReact>
                </Hide>
              </Box>
            )}
            <Box flex={[0, null, '1']}>
              <Hide xs sm>
                <GoogleMapReact
                  defaultCenter={MELBOURNE_GEO_LOCATION.center}
                  defaultZoom={MELBOURNE_GEO_LOCATION.zoom}
                  center={currentLocation}
                >
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
                  <Icon
                    name="mapMarkerAlt"
                    size="2x"
                    lat={lat}
                    lng={lng}
                    color="red"
                  />
                </GoogleMapReact>
              </Hide>
            </Box>
          </Flex>
        </Container>
      ) : (
        <Icon variant="naked" name="loading" />
      )}
    </>
  );
};

export default MapPage;
