import React from 'react';
import { Grid } from '@material-ui/core';
import { Redirect } from 'react-router';
import { useAuth } from 'hooks';
import Title from './Title/title';
import Label from './Label/label';
import Input from './Input/input';
// import propTypes from 'prop-types';

const Login = () => {
  const [token, setToken, hasToken] = useAuth();

  if (hasToken) return <Redirect to="/dashboard" />;

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Title text="soy un titulo" />
        <Label text="usuario" />
        <Input />
        <Label text="contraseña" />
      </Grid>
    </Grid>
  );
};

Login.propTypes = {};

export default Login;
