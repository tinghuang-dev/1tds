import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from '../../../../components/Flex';
import Box from '../../../../components/Box';
import Button from '../../../../components/Button';
import Hide from '../../../../components/Hide';
import Icon from '../../../../components/Icon';
import Input from '../../../../components/Input';
import useAddressPredictions from './components/useAddressPredictions';
import TruncateText from '../../../../components/TruncateText';

const ListHover = styled(Box)`
    cursor: pointer;
    :hover {
    background-color: white;
  }
`;

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [addressPrediction, setAddressPrediction] = useState();

  const predictions = useAddressPredictions(value);

  const onPredictionClick = (prediction) => {
    setValue(prediction.description);
    setAddressPrediction(prediction);
  };

  const handleInput = (event) => {
    setValue(event.target.value);
    setAddressPrediction();
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
        <Flex
          flex="1"
          justifyContent="flex-end"
          ml={[null, null, 'lg']}
          my={['lg', null, 0]}
        >
          <Button size={['md', null, 'lg']}>查找团购</Button>
        </Flex>
      </Flex>
      {!addressPrediction && (
        <Box bg="grey" mr="200px">
          {predictions?.map((prediction) => (
            <ListHover py="md" px="md" key={prediction.place_id}>
              <Flex>
                <Icon name="search" size="1x" />
                <TruncateText>
                  <Box
                    onClick={() => onPredictionClick(prediction)}
                    pl="md"
                  >
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
