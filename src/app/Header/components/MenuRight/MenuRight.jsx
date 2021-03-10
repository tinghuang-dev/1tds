import React from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import Icon from '../../../../components/Icon';
import Input from '../../../../components/Input';
import useToggler from '../../../../hooks/useToggler';
import UserAuthModals from '../../../UserAuthModals';

const Right = styled.ul`
  flex: 1;
  height: 64px;
  list-style: none;
  display: flex;
  justify-content: flex-end;
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
  const [showUserAuthModals, toggleShowUserAuthModals] = useToggler(false);

  return (
    <Right>
      <li>
        <SearchBarWrapper>
          <Input size="sm" suffix={(<Icon name="search" />)} />
        </SearchBarWrapper>
      </li>
      <li>
        <Button size="sm" onClick={() => toggleShowUserAuthModals()}>登陆</Button>
        {showUserAuthModals && (<UserAuthModals onClose={() => toggleShowUserAuthModals()} />)}
      </li>
    </Right>
  );
};

export default MenuRight;
