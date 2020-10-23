import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withRouter } from 'react-router';
// import _ from 'lodash';
// import { all as routes } from 'routes';

const Page = ({ history = {}, match = {}, location = {} }) => {
  const { pathname: path } = location;

  const asyncInit = async () => {
    // const route = _.find(routes, { path });
    // if (!!route) history.push(route.path);
  };

  useEffect(() => {
    asyncInit();
  }, []);

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Typography variant="h1">Page 404</Typography>
      </Grid>
    </Grid>
  );
};

Page.propTypes = {};

export default withRouter(Page);
