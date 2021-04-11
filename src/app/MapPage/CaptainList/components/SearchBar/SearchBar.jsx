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

  const handleInput = (event) => {
    setValue(event.target.value);
    setAddress();
  };

  const onPredictionClick = (prediction) => {
    setValue(prediction.description);
    setAddress(prediction);
  };

  return (
    <Box>
      <Flex
        py="md"
        px="lg"
        borderBottom="@1"
        borderBottomColor="border"
      >
        <Box mr="md" width="100%">
          <Input
            value={value}
            onChange={handleInput}
            size="sm"
            suffix={(
              <Icon
                name="closeCircle"
                onClick={() => setValue('')}
              />
            )}
          />
        </Box>
        <Button size="sm" onClick={() => goToMapPageByAddress(address)}>查找团购</Button>
      </Flex>
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
                height="30px"
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
