import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Button from '../../../../components/Button';

const Right = styled.ul`
  list-style: none;
  display: flex;
`;

const SignIn = styled(Button)`
    margin-right: 10px;
`;

const SearchBar = styled.div`
    display: flex;
`;
const Input = styled.input`
  width: 213px;
  height: 37px;
  padding: 6px 8px;
  left: calc(50% - 213px/2 - 67.5px);
  top: calc(50% - 37px/2);
  background: #F2F2F2;
  border: 1px solid #C97A40;
  box-sizing: border-box;
  border-radius: 13px;
  ::placeholder {
    color: #C97A40;
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    font-feature-settings: 'liga' off;
  }
`;
const SearchIcon = styled.div`
  position: relative;
  left: -30px;
  width: 20px;
`;
const MenuRight = () => (
  <Right>
    <li>
      <SearchBar>
        <Input type="text" placeholder="搜索" />
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
      <SignIn>登陆</SignIn>
    </li>
  </Right>
);

export default MenuRight;
