import React from 'react';
// import propTypes from 'prop-types';
import { Redirect } from 'react-router';
import { AddShoppingCart as AddShoppingCartIcon } from '@material-ui/icons';
import { AppBar, Summary } from 'components';
// import { make } from 'theme';
import { dashboard as routes } from 'routes';
import useAuth from 'hooks/useAuth';
import Skeleton from './Skeleton';

const Dashboard = ({ history = {} }) => {
  // const classes = make((theme) => ({}));

  const actions = [
    { id: 0, icon: AddShoppingCartIcon },
    { id: 1, icon: AddShoppingCartIcon },
    { id: 2, icon: AddShoppingCartIcon },
  ];

  const [token, setToken, hasToken] = useAuth();

  if (!hasToken) return <Redirect to="/login" />;

  const onChangePage = async (route) => {
    history.push(route.path);
  };

  const appBar = <AppBar routes={routes} onChangePage={onChangePage} />;

  const summary = <Summary actions={actions} />;

  return (
    <Skeleton withOutRouter history={history} routes={routes} appBar={appBar} summary={summary} />
  );
};

Dashboard.propTypes = {};

export default Dashboard;
