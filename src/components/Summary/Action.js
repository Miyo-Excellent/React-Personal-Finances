import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

/**
 *
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

/**
 *
 * @param data {Object}
 * @returns {JSX.Element}
 * @constructor
 */
const Action = ({ data = {} }) => (
  <ThemeProvider theme={theme({})}>
    <IconButton color="primary">
      <data.icon color="primary" />
    </IconButton>
  </ThemeProvider>
);

Action.defaultProps = {};

Action.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Action;
