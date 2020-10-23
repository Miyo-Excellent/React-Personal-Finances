import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';
import { Paper } from '@material-ui/core';
import { Content, ContentHeader, Layout, NavBar, Summary } from 'components/Dashboard';

const history = createBrowserHistory();

const Menu = ({ children = null }) => <NavBar component={Paper}>{children}</NavBar>;
const Resumen = ({ children = null }) => <Summary component={Paper}>{children}</Summary>;
const Header = ({ children = null }) => <ContentHeader component={Paper}>{children}</ContentHeader>;

/**
 *
 * @param routes {Array<Object>}
 * @param withOutRouter {Boolean}
 * @param appBar {JSX.Element}
 * @param summary {JSX.Element}
 * @param newHistory {Boolean}
 * @param childrenExtraProps {Object}
 * @returns {JSX.Element}
 * @constructor
 */
const Skeleton = ({
  routes = [],
  withOutRouter = false,
  appBar = null,
  summary = null,
  header = null,
  newHistory = false,
  childrenExtraProps = {},
}) => {
  let proportionStart = 2;
  let proportionEnd = 1;

  if (!appBar) {
    proportionStart = 1;

    proportionEnd += 1;
  }

  if (!summary) proportionEnd += 1;

  const getRouteComponent = (route = {}, routeKey) => {
    const childExtraProps = /dashboard/gi.test(route.path) ? childrenExtraProps : {};

    return (
      <Route
        {...route}
        component={(props) => <route.component {...props} {...childExtraProps} {...route} />}
        key={routeKey.toString()}
      />
    );
  };

  const routesComponents = (routes || []).map(getRouteComponent);

  const order = summary ? proportionStart : `${proportionStart}/${proportionEnd}`;

  if (withOutRouter) {
    return (
      <Layout withNavBar={!!appBar}>
        <Menu>{appBar}</Menu>

        <Content order={order} style={{ padding: 0 }}>
          {!!header && <Header>{header}</Header>}

          <Switch>{routesComponents}</Switch>
        </Content>

        <Resumen>{summary}</Resumen>
      </Layout>
    );
  }

  return (
    <Router history={newHistory ? history : undefined}>
      <Layout container>
        <Content order={order} style={{ padding: 0 }} className='TEST'>
          {!!header && <Header>{header}</Header>}

          <Switch>{routesComponents}</Switch>
        </Content>
      </Layout>
    </Router>
  );
};

Skeleton.defaultProps = {
  AppBar: null,
  header: null,
  newHistory: false,
  // routes: [],
  summary: null,
  withOutRouter: false,
  childrenExtraProps: {},
};

Skeleton.propTypes = {
  AppBar: PropTypes.element,
  header: PropTypes.element,
  newHistory: PropTypes.bool,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  withOutRouter: PropTypes.bool,
  summary: PropTypes.element,
  childrenExtraProps: PropTypes.objectOf(PropTypes.object),
};

export default Skeleton;
