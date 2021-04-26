import React from 'react';
import Icon from '../../../../components/Icon';
import AddressInput from '../../../../components/AddressInput';
import Hide from '../../../../components/Hide';
import SwitchMapButton from './components/SwitchMapButton/SwitchMapButton';
import Flex from '../../../../components/Flex';

const SearchBar = ({ toggleShowCaptainList }) => (
  <Flex
    py="md"
    px="sm"
    mt={['40px', null, 0]}
    alignItems="center"
  >
    <Hide md lg>
      <SwitchMapButton toggleShowCaptainList={toggleShowCaptainList} />
    </Hide>
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
  </Flex>
);

export default SearchBar;
