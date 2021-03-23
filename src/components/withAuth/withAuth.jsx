import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import getAuthToken from '../../utils/getAuthToken';

const withAuth = (Component) => {
  const HOComponent = (props) => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
      const authToken = getAuthToken();

      if (!authToken) {
        Router.push('/login');

        return;
      }

      setAuthenticated(true);
    }, []);

    if (!authenticated) {
      return null;
    }

    return (
      <Component
        {...props} // eslint-disable-line react/jsx-props-no-spreading
      />
    );
  };

  return HOComponent;
};

export default withAuth;
