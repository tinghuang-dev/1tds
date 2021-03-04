import styled from 'styled-components';
import Image from 'next/image';
import { useState, React } from 'react';
import Login from './Login';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

const Right = styled.ul`
  list-style: none;
  display: flex;
  padding: 16px 0;
  margin: 0;
  align-items: center;
`;

const SearchBar = styled.div`
  display: flex;
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

const MenuRight = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginModalShow = (event) => {
    event.preventDefault();
    setShowLoginModal((preState) => !preState);
  };

  return (
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
        <Button size="md" onClick={handleLoginModalShow}>登陆</Button>
        {showLoginModal && <Login onClose={handleLoginModalShow} />}
      </li>
    </Right>
  );
};

export default MenuRight;
