import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Button from '../../../../components/Button';
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
  margin-left: 62px;
`;

const SearchBar = () => (
  <SearchBarWrapper>
    <InputWrapper>
      <Input
        size="lg"
        variant="naked"
        prefix={(
          <Image
            alt="地点"
            src="/images/icons/location.svg"
            width={20}
            height={40}
          />
        )}
        suffix={(
          <Image
            alt="搜索"
            src="/images/icons/searchIcon.svg"
            width={30}
            height={40}
          />
        )}
      />
    </InputWrapper>
    <CallToAction>
      <Button type="button" size="lg">查找团购</Button>
    </CallToAction>
  </SearchBarWrapper>
);
export default SearchBar;
