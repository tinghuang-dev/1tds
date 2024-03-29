import React, { useState } from 'react';
import { useRouter } from 'next/router';
import GoogleMapReact from 'google-map-react';
import useToggler from '../../hooks/useToggler';
import Container from '../../components/Container';
import Title from '../../components/Title';
import CaptainList from './components/CaptainList';
import SearchBar from './components/SearchBar';
import useCaptains from './hooks/useCaptains';
import Flex from '../../components/Flex';
import StoreDetailModal from './components/StoreDetailModal';
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
  const [showStoreDetail, setShowStoreDetail] = useState(false);
  const [products, setProducts] = useState();

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
      <Container>
        <Flex maxHeight="100vh" position="relative">
          <Box
            position="absolute"
            zIndex="@100"
            width={['100%', null, '400px']}
            borderLeft="@1"
            borderRight="@1"
            borderColor="border"
          >
            <SearchBar toggleShowCaptainList={toggleShowCaptainList} />
          </Box>
          {showCaptainList ? (
            <Box
              width={['100%', null, '400px']}
              border="@1"
              borderColor="border"
              mt={['100px', null, '1x']}
            >
              <CaptainList
                captains={captains}
                setShowStoreDetail={setShowStoreDetail}
                setProducts={setProducts}
              />
            </Box>
          ) : (
            <Hide md lg>
              <Box flex="1" width="100vw" height="80vh">
                <GoogleMapReact
                  defaultCenter={MELBOURNE_GEO_LOCATION.center}
                  defaultZoom={MELBOURNE_GEO_LOCATION.zoom}
                  center={currentLocation}
                >
                  <Icon
                    name="mapPin"
                    size="2x"
                    lat={lat}
                    lng={lng}
                    color="red"
                  />
                  {captains?.map((l) => (
                    <Icon
                      name="storeMark"
                      size="2x"
                      lat={l.location.latitude}
                      lng={l.location.longitude}
                      color="red"
                    />
                  ))}
                </GoogleMapReact>
              </Box>
            </Hide>
          )}
          {((lat && lng) && captains) ? (
            <Box flex="1">
              <Hide xs sm>
                <GoogleMapReact
                  defaultCenter={MELBOURNE_GEO_LOCATION.center}
                  defaultZoom={MELBOURNE_GEO_LOCATION.zoom}
                  center={currentLocation}
                >
                  <Icon
                    name="mapPin"
                    size="2x"
                    lat={lat}
                    lng={lng}
                    color="red"
                  />
                  {captains?.map((l) => (
                    <Icon
                      name="storeMark"
                      size="2x"
                      lat={l.location.latitude}
                      lng={l.location.longitude}
                      color="red"
                    />
                  ))}
                </GoogleMapReact>
              </Hide>
            </Box>
          ) : (
            <Icon variant="naked" name="loading" />
          )}
          {showStoreDetail && (
            <Box position="absolute" top="65px" left="405px">
              <StoreDetailModal setShowStoreDetail={setShowStoreDetail} products={products} />
            </Box>
          )}
        </Flex>
      </Container>
    </>
  );
};

export default MapPage;
