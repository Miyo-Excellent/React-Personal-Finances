import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { getMonthsByNumber } from 'utils';

const Settings = ({ slider = {} }) => (
  <Grid container justify="center" alignItems="center">
    <Grid item>
      <Typography variant="h1">Configuraciones</Typography>

      <hr />

      <Typography variant="subtitle1">{getMonthsByNumber(slider?.data || 1)}</Typography>
    </Grid>
  </Grid>
);

Settings.propTypes = {
  slider: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Settings;
