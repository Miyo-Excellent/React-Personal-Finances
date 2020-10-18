import React from 'react';
import { Redirect, withRouter } from 'react-router';

import useAuth from 'hooks/useAuth';

const Auth = () => {
  const [token, setToken, hasToken] = useAuth();

  if (!hasToken) return <Redirect to="/login" />;

  return <Redirect to="/dashboard" />;
};

Auth.propTypes = {};

export default withRouter(Auth);
