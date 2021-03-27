import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import getIconByName from './getIconByName';

export default function Icon({
  variant,
  name,
  ...props
}) {
  const color = {
    naked: '',
    primary: '#EB9050',
    link: '#6097E6',
    success: '#97A73F',
    error: '#E83D32',
  }[variant || 'primary'];

  return (
    <FontAwesomeIcon
      color={color}
      icon={getIconByName(name)}
      {...props} // eslint-disable-line react/jsx-props-no-spreading
    />
  );
}
