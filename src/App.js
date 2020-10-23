import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Grid } from '@material-ui/core';
import { Reset as ResetCss } from 'styled-reset';

import { CustomResetCss } from 'components';
import { Navigation } from 'components/Navigation';

import { root as routes } from 'routes';

// import { numeralConfig } from 'utils';

import { custom as theme } from 'theme';

import 'styles/global.scss';

// numeralConfig();

const App = () => (
  <CustomResetCss>
    <ThemeProvider theme={theme}>
      <ResetCss />

      <CssBaseline />

      <Container maxWidth="xl" style={{ padding: 0, margin: 0, height: '100%' }}>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ padding: 0, margin: 0, height: '100%' }}
        >
          <Navigation routes={routes} />
        </Grid>
      </Container>
    </ThemeProvider>
  </CustomResetCss>
);

App.propTypes = {};

export default App;
