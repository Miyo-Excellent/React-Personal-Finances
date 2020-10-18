import React from 'react';
// import propTypes from 'prop-types';
import { Redirect } from 'react-router';
import { AppBar } from 'components';
// import { make } from 'theme';
import { dashboard as routes } from 'routes';
import useAuth from 'hooks/useAuth';
import Skeleton from './Skeleton';

const Dashboard = ({ history = {} }) => {
  // const classes = make((theme) => ({}));

  const [token, setToken, hasToken] = useAuth();

  if (!hasToken) return <Redirect to="/login" />;

  const onChangePage = async (route) => {
    history.push(route.path);
  };

  const appBar = <AppBar routes={routes} onChangePage={onChangePage} />;

  return <Skeleton withOutRouter history={history} routes={routes} appBar={appBar} />;
};

Dashboard.propTypes = {};

export default Dashboard;
