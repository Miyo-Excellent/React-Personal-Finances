import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { getMonthsByNumber } from 'utils';

const Calendar = ({ slider = {} }) => (
  <Grid container justify="center" alignItems="center">
    <Grid item>
      <Typography variant="h1">Calendario</Typography>

      <hr />

      <Typography variant="subtitle1">{getMonthsByNumber(slider?.data || 1)}</Typography>
    </Grid>
  </Grid>
);

Calendar.propTypes = {
  slider: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Calendar;
