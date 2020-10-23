import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';
import PieChart from './PieChart';

/**
 *
 * @param data {Array<Object>}
 * @param locale {String}
 * @param palette {Object}
 * @returns {Theme| *}
 */
export const theme = ({ palette = {} }) =>
  createMuiTheme({
    palette: {
      primary: {
        main: green[500],
      },
      ...palette,
    },
  });

const Graphics = ({ data = [], demo = false, title = '' }) => {
  const dataFormatted = data
    .map(({ name = '', value = 0 }) => ({ [name]: value < 0 ? -1 * value : value }))
    .reduce((acc, item = {}) => [...acc, ...Object.entries(item)], []);

  return (
    <ThemeProvider theme={theme({})}>
      <Grid container item>
        <PieChart demo={demo} data={dataFormatted} title={title} />
      </Grid>
    </ThemeProvider>
  );
};

Graphics.defaultProps = {
  demo: false,
};

Graphics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  demo: PropTypes.bool,
};

export default Graphics;
