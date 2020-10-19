import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';
import Action from './Action';

/**
 *
 * @param data {Array<{Object}>}
 * @returns {JSX.Element}
 * @constructor
 */
const Actions = ({ data = [] }) => (
  <Grid
    container
    item
    component={Paper}
    xs={12}
    ms={12}
    lg={12}
    xl={12}
    direction="row"
    wrap="nowrap"
  >
    {data.map((action = {}, index = 0) => (
      <Action data={action} key={index.toString()} />
    ))}
  </Grid>
);

Actions.defaultProps = {};

Actions.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Actions;
