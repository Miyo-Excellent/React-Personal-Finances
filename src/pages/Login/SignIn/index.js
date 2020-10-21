import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isAlphanumeric } from 'validator';
import { Button, Slide } from '@material-ui/core';
import { Items } from 'components/Styled/styles';
import Title from '../Title/title';
import Label from '../Label/label';
import Input from '../Input/input';

const SignIn = ({ inLogin = false }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const hasUser = isAlphanumeric(user);
  const hasPassword = isAlphanumeric(password);

  function handleChange(name, value) {
    if (name === 'usuario') return setUser(value);
    if (name === 'password') return setPassword(value);
    return setPassword(value);
  }

  function handleSubmit() {
    //const account = { user, password };
  }

  return (
    <Slide in={!inLogin} direction="right" mountOnEnter unmountOnExit timeout={750}>
      <Items>
        <Title />
        <Label size={14} text="User name" />
        <Input
          error={!hasUser}
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
          error={!hasPassword}
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
          Ingresar
        </Button>
      </Items>
    </Slide>
  );
};

SignIn.propTypes = {
  inLogin: PropTypes.bool.isRequired,
};

export default SignIn;
