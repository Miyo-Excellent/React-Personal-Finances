import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';
import __actions__ from './Actions';
import __action__ from './Action';

export const Action = __action__;
export const Actions = __actions__;

/**
 *
 * @param actions {Array<{Object}>}
 * @returns {JSX.Element}
 * @constructor
 */
const Summary = ({ actions = [] }) => (
  <Grid component={Paper} container>
    <Grid item xs={12} ms={12} lg={12} xl={12}>
      <Actions data={actions} />
    </Grid>
  </Grid>
);

Summary.defaultProps = {};

Summary.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Summary;
