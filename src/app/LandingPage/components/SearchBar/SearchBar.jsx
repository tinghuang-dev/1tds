import React from 'react';
import Hide from '../../../../components/Hide';
import Icon from '../../../../components/Icon';
import AddressInput from '../../../../components/AddressInput/AddressInput';

const SearchBar = () => (
  <>
    <AddressInput
      layout={['block', null, 'flex']}
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
            <Icon name="closeCircle" size="2x" />
          </Hide>
          <Hide md lg>
            <Icon name="closeCircle" size="1x" />
          </Hide>
        </>
            )}
      predictionPrefix={(
        <>
          <Hide xs sm>
            <Icon name="mapMarkerAlt" size="2x" variant="grey" />
          </Hide>
          <Hide md lg>
            <Icon name="mapMarkerAlt" size="1x" variant="grey" />
          </Hide>
        </>
            )}
      searchButton="查找团购"
    />
  </>
);

export default SearchBar;
