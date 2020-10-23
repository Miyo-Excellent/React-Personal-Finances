import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isAlphanumeric } from 'validator';
import { Button, Slide } from '@material-ui/core';
import { Items } from 'components/Styled';
import { useSingIn } from 'hooks';
import Title from '../Title/title';
import Label from '../Label/label';
import Index from '../Input';

const SignIn = ({ inLogin = false }) => {
  const { hasUser, hasPassword, handleChange, handleSubmit } = useSingIn('');

  return (
    <Slide in={!inLogin} direction="right" mountOnEnter unmountOnExit timeout={750}>
      <Items>
        <Title />
        <Label size={14} text="User name" />
        <Index
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

        <Index
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
          INGRESAR
        </Button>
      </Items>
    </Slide>
  );
};

SignIn.propTypes = {
  inLogin: PropTypes.bool.isRequired,
};

export default SignIn;
