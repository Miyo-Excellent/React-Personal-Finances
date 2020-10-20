import React, { useState } from 'react';
// import propTypes from 'prop-types';
import { Grid, Button, Slide } from '@material-ui/core';
import { Redirect } from 'react-router';
import { useAuth } from 'hooks';
import { Container, Nav, Items, Images } from 'components/Styled/styles';
import imagen from 'assets/Images/unnamed.jpg';
import Title from './Title/title';
import Label from './Label/label';
import Input from './Input/input';
import Navbar from './Navbar/navbar';

const Login = () => {
  const [token, setToken, hasToken] = useAuth();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [inLogin, setInLogin] = useState(false);

  function handleChange(name, value) {
    if (name === 'usuario') {
      setUser(value);
    } else if (value.length < 6) {
    } else {
      setPassword(value);
    }
  }

  function handleSubmit() {
    // const account = { user, password };
  }

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
      <Container style={{ width: '50%', height: '100%', overflow:"hidden" }}>
        {/* Grid Item */}
        <Nav>
          <Navbar setInLogin={setInLogin} />
        </Nav>

        <Slide in={inLogin} direction="left" mountOnEnter unmountOnExit timeout={750}>
          <Grid container>
            <h1>Registro</h1>
          </Grid>
        </Slide>

        <Slide in={!inLogin} direction="right" mountOnEnter unmountOnExit timeout={750}>
          <Items>
            <Title />

            <Label size={14} text="User name" />

            <Input
              attribute={{
                id: 'usuario',
                name: 'usuario',
                type: 'text',
                placeholder: 'ingrese su usuario',
              }}
              handleChange={handleChange}
            />

            <Label
              size={14}
              text="Password"
              style={{
                padding: '0 20px',
                margin: '20px',
                width: '300px',
              }}
            />

            <Input
              attribute={{
                id: 'contraseña',
                name: 'contraseña',
                type: 'password',
                placeholder: 'ingrese su contraseña',
              }}
              handleChange={handleChange}
            />

            <Button
              variant="contained"
              color="primary"
              disableElevation
              onClick={handleSubmit}
              style={{
                padding: '10px',
                margin: '20px',
                width: '300px',
              }}
            >
              Login
            </Button>
          </Items>
        </Slide>
      </Container>
    </Grid>
  );
};

Login.propTypes = {};

export default Login;
