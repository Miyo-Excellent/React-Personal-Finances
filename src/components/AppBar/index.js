import React from 'react';
import propTypes from 'prop-types';
import { AppBar as MaterialAppBar, Grid, Toolbar } from '@material-ui/core';
import Button from './Button';

const AppBar = ({ routes = [], onChangePage = async () => null }) => (
  <MaterialAppBar position="static" style={{ background: 'white', margin: '20px 0' }} elevation={3}>
    <Toolbar>
      <Grid container>
        {routes
          .filter((route) => !!route.showOnAppBar)
          .map((route, routeKey) => (
            <Grid key={routeKey.toString()} item justify="center" alignItems="center">
              <Button onClick={() => onChangePage(route)}>{route.name}</Button>
            </Grid>
          ))}
      </Grid>
    </Toolbar>
  </MaterialAppBar>
);

AppBar.defaultProps = {
  // title: '',
};

AppBar.propTypes = {
  // title: propTypes.string,
  routes: propTypes.arrayOf(propTypes.object).isRequired,
  onChangePage: propTypes.func.isRequired,
};

export { AppBar, Button };

export default AppBar;
