import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Button from '../../../../components/Button';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;

const PlaceIcon = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  object-position: 50% 50%;
  margin-left: 8px;
`;

const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-left: 50px;
  width: 600px;
  height: 60px;
  margin-left: -32px;
  background: #E0E0E0;
  outline: none;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  letter-spacing: 4px;
`;

const SearchIcon = styled.div`
  display: flex;
  margin-left: -40px;
`;

const CallToAction = styled.div`
  margin-left: 72px;
`;

const SearchBar = () => (
  <InputWrapper>
    <PlaceIcon>
      <Image
        alt="地点"
        src="/images/icons/location.svg"
        width={20}
        height={40}
      />
    </PlaceIcon>
    <Input
      type="Text"
    />
    <SearchIcon>
      <Image
        alt="搜索"
        src="/images/icons/searchIcon.svg"
        width={30}
        height={40}
      />
    </SearchIcon>
    <CallToAction>
      <Button type="button" size="lg">查找团购</Button>
    </CallToAction>
  </InputWrapper>
);
export default SearchBar;