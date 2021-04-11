import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from '../../../../components/Flex';
import Box from '../../../../components/Box';
import Button from '../../../../components/Button';
import Hide from '../../../../components/Hide';
import Icon from '../../../../components/Icon';
import Input from '../../../../components/Input';
import useAddressPredictions from '../../../../lib/googleMap/useAddressPredictions';
import goToMapPageByAddress from '../../../../lib/googleMap/goToMapPageByAddress';
import TruncateText from '../../../../components/TruncateText';

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
        <Button size={['md', null, 'lg']} onClick={() => goToMapPageByAddress(address)}>查找团购</Button>
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
