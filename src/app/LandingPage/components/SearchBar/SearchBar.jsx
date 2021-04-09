import React, { useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import Flex from '../../../../components/Flex';
import Box from '../../../../components/Box';
import Button from '../../../../components/Button';
import Hide from '../../../../components/Hide';
import Icon from '../../../../components/Icon';
import Input from '../../../../components/Input';
import useAddressPredictions from '../../../../lib/googleMap/useAddressPredictions';
import TruncateText from '../../../../components/TruncateText';
import getGeoLocationByPlaceId from '../../../../lib/googleMap/getGeoLocationByPlaceId';

const ListHover = styled(Box)`
    cursor: pointer;
    :hover {
      background-color: white;
    }
`;

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [address, setAddress] = useState();

  const predictions = useAddressPredictions(value);

  const onPredictionClick = (prediction) => {
    setValue(prediction.description);
    setAddress(prediction);
  };

  const handleInput = (event) => {
    setValue(event.target.value);
    setAddress();
  };

  const handleSubmit = () => {
    if (!address) {
      return;
    }

    const placeId = address.place_id;

    getGeoLocationByPlaceId(placeId)
      .then((result) => {
        const latlng = {
          lat: result[0].geometry.location.lat(),
          lng: result[0].geometry.location.lng(),
        };

        Router.push({
          pathname: '/map',
          query: latlng,
        });
      });
  };

  return (
    <Box>
      <Flex
        flexWrap={['wrap', null, 'initial']}
        mt={['1x', null, 0]}
        pt="sm"
      >
        <Box width="100%" bg="grey" borderRadius="default">
          <Input
            value={value}
            onChange={handleInput}
            size={['md', null, 'lg']}
            variant="naked"
            prefix={(
              <>
                <Hide xs sm>
                  <Icon name="mapMarkerAlt" size="2x" />
                </Hide>
                <Hide md lg>
                  <Icon name="mapMarkerAlt" size="1x" />
                </Hide>
              </>
            )}
            suffix={(
              <>
                <Hide xs sm>
                  <Icon name="search" size="2x" />
                </Hide>
                <Hide md lg>
                  <Icon name="search" size="1x" />
                </Hide>
              </>
            )}
          />
        </Box>
      </Flex>
      {(address || !value) && (
      <Flex
        justifyContent="flex-end"
        my={['lg', null, 'lg']}
      >
        <Button size={['md', null, 'lg']} onClick={handleSubmit}>查找团购</Button>
      </Flex>
      )}
      {(!address && value) && (
        <Box
          bg="grey"
          border="@1"
          borderTop="none"
          borderBottom="none"
          borderColor="grey"
        >
          {predictions?.map((prediction) => (
            <ListHover px="md" key={prediction.place_id}>
              <Flex
                onClick={() => onPredictionClick(prediction)}
                height="50px"
                alignItems="center"
              >
                <Icon name="search" size="1x" />
                <TruncateText>
                  <Box pl="md">
                    {prediction.description}
                  </Box>
                </TruncateText>
              </Flex>
            </ListHover>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
