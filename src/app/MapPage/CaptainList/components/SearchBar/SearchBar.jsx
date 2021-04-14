import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from '../../../../../components/Flex';
import Box from '../../../../../components/Box';
import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';
import Icon from '../../../../../components/Icon';
import useAddressPredictions from '../../../../../lib/googleMap/useAddressPredictions';
import TruncateText from '../../../../../components/TruncateText';
import goToMapPageByAddress from '../../../../../lib/googleMap/goToMapPageByAddress';
import Text from '../../../../../components/Text';

const ListHover = styled(Box)`
    cursor: pointer;
    :hover {
      background-color: #f0f0f0;
    }
`;

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [address, setAddress] = useState();

  const predictions = useAddressPredictions(value);

  const handleInput = (event) => {
    setValue(event.target.value);
    setAddress();
  };

  const onPredictionClick = (prediction) => {
    setValue(prediction.description);
    setAddress(prediction);
  };

  return (
    <Box position="relative">
      <Flex
        py="md"
        px="sm"
        borderBottom="@1"
        borderBottomColor="border"
      >
        <Box mr="md" width="100%">
          <Input
            value={value}
            onChange={handleInput}
            size="sm"
            prefix={(
              <Icon
                name="mapMarkerAlt"
              />
            )}
            suffix={(
              <Icon
                name="closeCircle"
                onClick={() => setValue('')}
              />
            )}
          />
        </Box>
        <Button
          size="sm"
          onClick={() => goToMapPageByAddress(address)}
        >
          查找团购
        </Button>
      </Flex>
      {(!address && value) && (
        <Box
          bg="white"
          border="@1"
          borderTop="none"
          borderColor="grey"
          position="absolute"
          borderRadius="default"
          zIndex="popup"
          width="265px"
          top="51px"
          left="8px"
        >
          {predictions?.map((prediction) => (
            <ListHover px="sm" key={prediction.place_id}>
              <Flex
                onClick={() => onPredictionClick(prediction)}
                height="30px"
                alignItems="center"
              >
                <Icon name="mapMarkerAlt" size="1x" variant="grey" />
                <TruncateText>
                  <Box pl="sm">
                    <Text fontSize="sm" fontFamily="arial">
                      {prediction.description}
                    </Text>
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
