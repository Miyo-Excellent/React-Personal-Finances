import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { AppBar as MaterialAppBar, Grid, Toolbar } from '@material-ui/core';
import Button from './Button';

const CustomMaterialAppBar = styled(MaterialAppBar)`
  background: white !important;

  &,
  & > * {
    height: 100% !important;
    width: 100% !important;

    & > * {
      height: 100% !important;
      width: 100% !important;
      flex-direction: column !important;
      flex-wrap: nowrap !important;
      padding: 0 !important;
    }
  }
`;

const AppBar = ({ routes = [], onChangePage = async () => null }) => (
  <CustomMaterialAppBar position="static" elevation={3}>
    <Toolbar orientation="vertical">
      <Grid container alignItems="center" justify="center">
        {routes
          .filter((route) => !!route.showOnAppBar)
          .map((route, routeKey) => (
            <Grid key={routeKey.toString()} item>
              <Button onClick={() => onChangePage(route)}>{route.name}</Button>
            </Grid>
          ))}
      </Grid>
    </Toolbar>
  </CustomMaterialAppBar>
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
