import React, { useState } from 'react';
import PlacesAutocomplete from 'react-google-places-autocomplete';
import scriptLoader from 'react-async-script';
import Flex from '../../../../components/Flex';
import Box from '../../../../components/Box';
import Button from '../../../../components/Button';
import Hide from '../../../../components/Hide';
import Icon from '../../../../components/Icon';
import Input from '../../../../components/Input';

const SearchBar = ({ isScriptLoaded, isScriptLoadSucceed }) => {
  const [address, setAddress] = useState();

  const handleChange = (value) => {
    setAddress(value);
  };

  const handleSelect = (value) => {
    setAddress(value);
  };

  return (
    <>
      {(isScriptLoaded && isScriptLoadSucceed) ? (
        <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
          {({
            getInput, suggestions, getSuggestionItem,
          }) => (
            <Flex
              flexWrap={['wrap', null, 'initial']}
              mt={['1x', null, 0]}
              py="sm"
            >
              <Box width="100%" bg="grey" borderRadius="default">
                <Flex display="block">
                  <Input
                    // eslint-disable-next-line no-undef
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...getInput({
                      placeholder: 'Enter Address ...',
                    })}
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
                  {suggestions.map((suggestion) => (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <div {...getSuggestionItem(suggestion)}>
                      {suggestion.description}
                    </div>
                  ))}
                </Flex>
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
          )}
        </PlacesAutocomplete>
      ) : (
        <div>
          加载失败...
        </div>
      )}
    </>
  );
};

export default scriptLoader(['https://maps.googleapis.com/maps/api/js?key=AIzaSyCa6z9n4ybixfY7JmVb4tVqfXPZwxyqFmE&libraries=places'])(SearchBar);
