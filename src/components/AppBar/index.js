import React from 'react';
import propTypes from 'prop-types';
import { find } from 'lodash';
import { withRouter } from 'react-router';
import { Grid, Toolbar } from '@material-ui/core';
import { useNavigationLocationPathname } from 'hooks';
import Button from './Button';
import customMaterialAppBar from './CustomMaterialAppBar';

export const CustomMaterialAppBar = customMaterialAppBar;

const AppBar = ({ location = {}, history = {}, routes = [] }) => {
  const { data: path, setData: setPath, hasData: hasPath } = useNavigationLocationPathname(
    location,
  );

  const route = find(routes, { path });

  const onChangePage = async (nextRoute = {}) => history.push(nextRoute.path);

  return (
    <CustomMaterialAppBar position="static" elevation={3}>
      <Toolbar orientation="vertical">
        <Grid container alignItems="stretch" justify="flex-start">
          {!!path &&
            !!route &&
            routes
              .filter((__route__) => !!__route__.showOnAppBar)
              .map((__route__, routeKey) => (
                <Grid
                  key={routeKey.toString()}
                  item
                  style={{
                    padding: '0 5px',
                    margin: routeKey === 0 ? '5px 0 0 0' : 0,
                  }}
                >
                  <Button
                    fullWidth
                    active={__route__.path === route.path}
                    onClick={() => onChangePage(__route__)}
                  >
                    {__route__.name}
                  </Button>
                </Grid>
              ))}
        </Grid>
      </Toolbar>
    </CustomMaterialAppBar>
  );
};

AppBar.defaultProps = {
  // title: '',
};

AppBar.propTypes = {
  // title: propTypes.string,
  routes: propTypes.arrayOf(propTypes.object).isRequired,
  location: propTypes.objectOf(propTypes.object).isRequired,
};

export { AppBar, Button };

export default withRouter(AppBar);
