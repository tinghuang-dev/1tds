import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

const Right = styled.ul`
  list-style: none;
  display: flex;
`;
const SearchBar = styled.div`
  display: flex;
`;
const SignIn = styled(Button)`
  height: 35px;
`;
const SearchInput = styled(Input)`
  height: 35px;
  width: 230px;
  background: #F2F2F2;
`;
const SearchIcon = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  left: -30px;
  top: 9px;
`;
const MenuRight = () => (
  <Right>
    <li>
      <SearchBar>
        <SearchInput type="text" />
        <SearchIcon>
          <Image
            alt="SearchIcon"
            src="/images/icons/searchIcon.svg"
            layout="fill"
            objectFit="contain"
          />
        </SearchIcon>
      </SearchBar>
    </li>
    <li>
      <SignIn size="lg">登陆</SignIn>
    </li>
  </Right>
);

export default MenuRight;
