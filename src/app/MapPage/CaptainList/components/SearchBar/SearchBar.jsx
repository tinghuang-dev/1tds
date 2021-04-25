import React from 'react';
import Box from '../../../../../components/Box';
import Icon from '../../../../../components/Icon';
import AddressInput from '../../../../../components/AddressInput/AddressInput';

const SearchBar = () => (
  <Box
    py="md"
    px="sm"
    borderBottom="@1"
    borderBottomColor="border"
  >
    <AddressInput
      layout="flex"
      size="sm"
      prefix={(
        <Icon
          name="mapMarkerAlt"
        />
            )}
      suffix={(
        <Icon
          name="closeCircle"
        />
            )}
      predictionPrefix={(
        <Icon name="mapMarkerAlt" size="1x" variant="grey" />
              )}
      searchButton="查找团购"
    />

  </Box>
);

export default SearchBar;
