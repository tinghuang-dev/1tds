import React from 'react';
import styled from 'styled-components';
import Icon from '../../../../../../components/Icon';
import Button from '../../../../../../components/Button';

const SearchButton = styled(Button)`
  display: none;

  @media (min-width: 320px) and (max-width: 1024px) {
    display: block;
    margin-right: 24px;
  }
`;

const ResponsiveSearchButton = () => (
  <SearchButton variant="naked">
    <Icon name="search" />
  </SearchButton>
);

export default ResponsiveSearchButton;
