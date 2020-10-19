import React from 'react';
import { isEmpty } from 'ramda';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import propTypes from 'prop-types';
import { createBrowserHistory } from 'history';
import { Paper } from '@material-ui/core';
import { Content, Layout, NavBar, Summary } from 'components/Dashboard';

const history = createBrowserHistory();

const Skeleton = ({
  routes = [],
  withOutRouter = false,
  appBar = null,
  summary = null,
  newHistory = false,
}) => {
  let proportionStart = 2;
  let proportionEnd = 1;

  if (!appBar) {
    proportionStart = 1;

    proportionEnd += 1;
  }

  if (!summary) {
    proportionEnd += 1;
  }

  const routesComponents = (routes || []).map((route = {}, routeKey) => (
    <Route key={routeKey.toString()} {...route} />
  ));

  const order = `${proportionStart}/${proportionEnd}`;

  const Menu = () => (!!appBar ? <NavBar>{appBar}</NavBar> : null);

  const Resumen = () =>
    !!summary ? (
      <Summary>
        <h1>Summary</h1>
      </Summary>
    ) : null;

  if (!!withOutRouter) {
    return (
      <>
        <Layout withNavBar={!!appBar}>
          <Menu />

          <Content order={order}>
            <Switch>{routesComponents}</Switch>
          </Content>

          <Resumen />
        </Layout>
      </>
    );
  }

  return (
    <Router history={!!newHistory ? history : undefined}>
      <Layout container component={Paper}>
        <Content order={order}>
          <Switch>{routesComponents}</Switch>
        </Content>
      </Layout>
    </Router>
  );
};

Skeleton.defaultProps = {
  AppBar: null,
  summary: null,
  withOutRouter: false,
  newHistory: false,
  // routes: [],
};

Skeleton.propTypes = {
  AppBar: propTypes.element,
  summary: propTypes.element,
  newHistory: propTypes.bool,
  routes: propTypes.arrayOf(propTypes.object).isRequired,
  withOutRouter: propTypes.bool,
};

export default Skeleton;
