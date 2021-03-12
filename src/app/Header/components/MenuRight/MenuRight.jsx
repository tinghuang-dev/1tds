import React from 'react';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import Icon from '../../../../components/Icon';
import Input from '../../../../components/Input';
import useToggler from '../../../../hooks/useToggler';
import UserAuthModals from '../../../UserAuthModals';
import ResponsiveSearchButton from './components/ResponsiveSearchButton';

const RightNav = styled.div`
  flex: 1;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (min-width: 320px) and (max-width: 1024px) {
    height: 40px;
    padding-right: 16px;
  }
`;

const SearchBarWrapper = styled.div`
  width: 230px;
  margin-right: 20px;

  @media (min-width: 320px) and (max-width: 1024px) {
    display: none;
  }
`;

const MenuRight = () => {
  const [showUserAuthModals, toggleShowUserAuthModals] = useToggler(false);

  return (
    <RightNav>
      <SearchBarWrapper>
        <Input size="sm" suffix={(<Icon name="search" />)} />
      </SearchBarWrapper>
      <ResponsiveSearchButton />
      <Button size="sm" onClick={() => toggleShowUserAuthModals()}>登陆</Button>
      {showUserAuthModals && (<UserAuthModals onClose={() => toggleShowUserAuthModals()} />)}
    </RightNav>
  );
};

export default MenuRight;
