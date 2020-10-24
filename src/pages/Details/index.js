import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { getMonthsByNumber } from 'utils';

const Details = ({ slider = {} }) => (
  <Grid container justify="center" alignItems="center">
    <Grid item>
      <Typography variant="h1">Detalles</Typography>

      <hr />

      <Typography variant="subtitle1">{getMonthsByNumber(slider?.data || 1)}</Typography>
    </Grid>
  </Grid>
);

Details.propTypes = {
  slider: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Details;
