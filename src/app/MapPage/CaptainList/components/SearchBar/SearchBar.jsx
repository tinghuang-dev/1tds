import React from 'react';
import Flex from '../../../../../components/Flex';
import Box from '../../../../../components/Box';
import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';
import Icon from '../../../../../components/Icon';

const SearchBar = () => (
  <Flex
    p="lg"
    borderBottom="@1"
    borderBottomColor="border"
  >
    <Box mr="md" width="100%">
      <Input
        size="sm"
        suffix={(<Icon name="closeCircle" />)}
      />
    </Box>
    <Button size="sm">查找团购</Button>
  </Flex>
);

export default SearchBar;
