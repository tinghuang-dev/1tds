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

const SearchBarWrapper = styled.div`
  display: flex;
  width: 230px;
  box-sizing: border-box;
  margin-right: 20px;
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
        <SearchBarWrapper>
          <Input
            suffix={(
              <Image
                alt="搜索"
                src="/images/icons/searchIcon.svg"
                width={20}
                height={20}
              />
            )}
          />
        </SearchBarWrapper>
      </li>
      <li>
        <Button size="md" onClick={handleLoginModalShow}>登陆</Button>
        {showLoginModal && <Login onClose={handleLoginModalShow} />}
      </li>
    </Right>
  );
};

export default MenuRight;
