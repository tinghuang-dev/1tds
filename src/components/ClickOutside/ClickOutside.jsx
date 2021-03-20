/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useEffect } from 'react';

const preventInsideClickEventPropagatingToWindow = (event) => event.stopPropagation();

const ClickOutside = ({
  children,
  onOutsideClick,
}) => {
  useEffect(() => {
    window.addEventListener('click', onOutsideClick);

    return () => window.removeEventListener('click', onOutsideClick);
  }, [onOutsideClick]);

  return (
    <div onClick={preventInsideClickEventPropagatingToWindow}>
      {children}
    </div>
  );
};

export default ClickOutside;
