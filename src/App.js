import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Grid } from '@material-ui/core';
import { Reset as ResetCss } from 'styled-reset';

import { CustomResetCss } from 'components';
import { Navigation } from 'components/Navigation';

import { root as routes } from 'routes';

import { custom as theme } from 'theme';

const App = () => (
  <CustomResetCss>
    <ThemeProvider theme={theme}>
      <ResetCss />

      <CssBaseline />

      <Container maxWidth="xl" style={{ padding: 10 }}>
        <Grid container justify="center" alignItems="center">
          <Navigation routes={routes} />
        </Grid>
      </Container>
    </ThemeProvider>
  </CustomResetCss>
);

App.propTypes = {};

export default App;
