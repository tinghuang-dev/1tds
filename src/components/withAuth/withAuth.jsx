import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import getAuthToken from '../../utils/getAuthToken';

const withAuth = (Component) => {
  const HOComponent = (props) => {
    const [auth, setAuth] = useState();

    useEffect(() => {
      const authToken = getAuthToken();

      setAuth(authToken);

      if (!authToken) {
        Router.push('/login');
      }
    }, []);

    if (!auth) {
      return null;
    }

    return (
      <Component
        {...props} // eslint-disable-line react/jsx-props-no-spreading
        auth={auth}
      />
    );
  };

  return HOComponent;
};

export default withAuth;
