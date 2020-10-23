import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { format } from 'currency-formatter';
import { ButtonBase, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { CircularProgressWithLabel } from 'components';
import { LOCALE as locale } from 'config';
import TotalContainer from './TotalContainer';
import TotalLabel from './TotalLabel';
import TotalResult from './TotalResult';

/**
 *
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

/**
 *
 * @param data {Object}
 * @param progressSize {Number}
 * @returns {JSX.Element}
 * @constructor
 */
const Total = ({ data = {}, progressSize = 40 }) => {
  return (
    <ThemeProvider theme={theme({})}>
      <ButtonBase focusRipple style={{ margin: '0 0 10px 0' }}>
        <TotalContainer container item>
          <CircularProgressWithLabel
            value={data.progress}
            style={{ width: progressSize, height: progressSize }}
          />

          <TotalLabel item>
            <Typography variant="body1" style={{ fontSize: 16 }}>
              {data.name}
            </Typography>
          </TotalLabel>

          <TotalResult item>
            <Typography variant="subtitle1" style={{ fontSize: 18, fontWeight: 'bold' }}>
              {format(data.value, { locale })}
            </Typography>
          </TotalResult>
        </TotalContainer>
      </ButtonBase>
    </ThemeProvider>
  );
};

Total.defaultProps = {
  progressSize: 40,
};

Total.propTypes = {
  data: PropTypes.object.isRequired,
  progressSize: PropTypes.number,
};

export default Total;
