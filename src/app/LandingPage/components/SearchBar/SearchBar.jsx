import React from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import Icon from '../../../../components/Icon';
import Input from '../../../../components/Input';

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
`;

const InputWrapper = styled.div`
  width: 600px;
  margin-left: 4px;
  background-color: #F2F2F2;
  border-radius: 8px;
`;

const CallToAction = styled.div`
  margin-left: 36px;
`;

const SearchBar = () => (
  <SearchBarWrapper>
    <InputWrapper>
      <Input
        size="lg"
        variant="naked"
        prefix={(<Icon name="mapMarkerAlt" size="2x" />)}
        suffix={(<Icon name="search" size="2x" />)}
      />
    </InputWrapper>
    <CallToAction>
      <Button size="lg">查找团购</Button>
    </CallToAction>
  </SearchBarWrapper>
);
export default SearchBar;
