import React from 'react';
import { Grid, Typography } from '@material-ui/core';
// import propTypes from 'prop-types';

const Page = () => (
  <Grid container justify="center" alignItems="center">
    <Grid item>
      <Typography variant="h1">Home Page</Typography>
    </Grid>
  </Grid>
);

Page.propTypes = {};

export default Page;
