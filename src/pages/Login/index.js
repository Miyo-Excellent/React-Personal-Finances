import React, { useState } from 'react';
// import propTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { Redirect } from 'react-router';
import { useAuth } from 'hooks';
import { Container, Nav, Images } from 'components/Styled/styles';
import imagen from 'assets/Images/unnamed.jpg';
import Navbar from './Navbar/navbar';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Login = () => {
  const [token, setToken, hasToken] = useAuth();
  const [inLogin, setInLogin] = useState(false);

  if (hasToken) return <Redirect to="/dashboard" />;

  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      style={{
        minHeight: '100vh',
      }}
    >
      <Grid item xs={12} sm={6} style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <Images>
          <img src={imagen} alt="" />
        </Images>
      </Grid>

      {/* Grid */}
      <Container style={{ width: '50%', height: '100%', overflow: 'hidden' }}>
        {/* Grid Item */}
        <Nav>
          <Navbar setInLogin={setInLogin} />
        </Nav>

        <SignUp inLogin={inLogin} />

        <SignIn inLogin={inLogin} />
      </Container>
    </Grid>
  );
};

Login.propTypes = {};

export default Login;
