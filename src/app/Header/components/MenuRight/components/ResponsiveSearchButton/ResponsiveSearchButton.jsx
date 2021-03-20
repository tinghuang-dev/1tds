import React from 'react';
import Button from '../../../../../../components/Button';
import Icon from '../../../../../../components/Icon';
import useToggler from '../../../../../../hooks/useToggler';
import SearchModal from './components/SearchModal';

const ResponsiveSearchButton = () => {
  const [showSearchModal, toggleSearchModal] = useToggler(false);
  const handleClick = () => toggleSearchModal();

  return (
    <>
      <Button variant="naked" onClick={handleClick}>
        <Icon name="search" variant="text" />
      </Button>
      {showSearchModal && (<SearchModal onClose={handleClick} />)}
    </>
  );
};

export default ResponsiveSearchButton;
