import React, { useState } from 'react';
import Flex from '../../../../components/Flex';
import Box from '../../../../components/Box';
import Button from '../../../../components/Button';
import Hide from '../../../../components/Hide';
import Icon from '../../../../components/Icon';
import Input from '../../../../components/Input';
import useScript from '../../../../hooks/useScript';
import useAddressPredictions from './components/useAddressPredictions';

const SearchBar = () => {
  useScript('//maps.googleapis.com/maps/api/js?key=AIzaSyCa6z9n4ybixfY7JmVb4tVqfXPZwxyqFmE&language=en&libraries=places');

  const [input, setInput] = useState('');

  const predictions = useAddressPredictions(input);

  return (
    <Box>
      <Flex
        flexWrap={['wrap', null, 'initial']}
        mt={['1x', null, 0]}
        py="sm"
      >
        <Box width="100%" bg="grey" borderRadius="default">
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
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
      <ul>
        {predictions.map((prediction, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>{prediction}</li>
        ))}
      </ul>
    </Box>
  );
};

export default SearchBar;
