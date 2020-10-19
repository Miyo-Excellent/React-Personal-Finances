import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router';
import { useAuth } from 'hooks';
import Title from './Title/title';
import Label from './Label/label';
import Input from './Input/input';
// import propTypes from 'prop-types';

const Login = () => {
  const [token, setToken, hasToken] = useAuth();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPassworError] = useState(false);
  function handleChange(name, value) {
    if (name === 'usuario') {
      setUser(value);
    } else {
      if (value.length < 6) {
      } else {
        setPassword(value);
      }
    }
  }

  function handleSubmit() {
    let account = { user, password };
    if (account) {
      console.log('account:', account);
    }
  }

  if (hasToken) return <Redirect to="/dashboard" />;

  return (
    <>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        style={{
          minHeight: '100vh',
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          style={{ width: '100%', height: '100%', objectFit: 'cover', background: 'blue' }}
        >
          <img src="" alt="" />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          style={{ padding: 20, width: '100%' }}
          direction="column"
          alignItems="center"
          justify="space-between"
        >
          <Title />
          <Label text="User name" />
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
            text="Password"
            style={{
              padding: '10px',
              margin: '20px',
              width: '200px',
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
              width: '200px',
            }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

Login.propTypes = {};

export default Login;
