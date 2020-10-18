import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import propTypes from 'prop-types';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const Skeleton = ({ routes = [], withOutRouter = false, appBar = null, newHistory = false }) => {
  const routesComponents = (routes || []).map((route = {}, routeKey) => (
    <Route key={routeKey.toString()} {...route} />
  ));

  if (!!withOutRouter) {
    return (
      <>
        {appBar}

        <Switch>{routesComponents}</Switch>
      </>
    );
  }

  return (
    <Router history={!!newHistory ? history : undefined}>
      {appBar}

      <Switch>{routesComponents}</Switch>
    </Router>
  );
};

Skeleton.defaultProps = {
  AppBar: null,
  withOutRouter: false,
  newHistory: false,
};

Skeleton.propTypes = {
  AppBar: propTypes.element,
  newHistory: propTypes.bool,
  routes: propTypes.arrayOf(propTypes.object).isRequired,
  withOutRouter: propTypes.bool,
};

export default Skeleton;
