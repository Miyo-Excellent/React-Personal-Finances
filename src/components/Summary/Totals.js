import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Total from './Total';

/**
 *
 * @param data {Array<Object>}
 * @param progressSize {Number}
 * @returns {JSX.Element}
 * @constructor
 */
const Totals = ({ data = [], progressSize = 40 }) => (
  <Grid
    container
    item
    xs={12}
    ms={12}
    lg={12}
    xl={12}
    direction="column"
    wrap="nowrap"
    style={{ padding: '0 10px' }}
  >
    {data.map((item = {}, index = 0) => (
      <Total data={item} key={index.toString()} progressSize={progressSize} />
    ))}
  </Grid>
);

Totals.defaultProps = {
  progressSize: 40,
};

Totals.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  progressSize: PropTypes.number,
};

export default Totals;
