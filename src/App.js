import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Container, Grid } from '@material-ui/core';

import { Navigation } from 'components/Navigation';
import { root as routes } from 'routes';
import { custom as theme } from 'theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <Container maxWidth="xl">
      <Grid container justify="center" alignItems="center">
        <Grid item container>
          <Navigation routes={routes} />
        </Grid>
      </Grid>
    </Container>
  </ThemeProvider>
);

App.propTypes = {};

export default App;
