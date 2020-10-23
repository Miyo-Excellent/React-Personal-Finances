import React from 'react';
import PropTypes from 'prop-types';
import { Slide, Button } from '@material-ui/core';
import { Items } from 'components/Styled';
import { useSignUp } from 'hooks';
import Label from '../Label';
import Input from '../Input';

const SignUp = ({ inLogin = false }) => {
  const { hasUser, hasPassword, hasEmail, handleChange, handleSubmit } = useSignUp('');

  return (
    <Slide
      in={inLogin}
      direction="left"
      mountOnEnter
      unmountOnExit
      timeout={750}
    >
      <Items>
        <span
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            fontSize: '40px',
            padding: '10px 0',
            fontWeight: 'bold',
            color: 'blue',
            margin: '10px',
          }}
        >
          REGISTRATE !
        </span>

        <Label size={14} text="Nombre" />

        <Input
          error={!hasUser}
          attribute={{
            id: 'usuario',
            name: 'usuario',
            type: 'text',
            placeholder: 'ingrese su nombre',
          }}
          handleChange={handleChange}
        />

        <Label size={14} text="Apellido" />

        <Input
          error={!hasUser}
          attribute={{
            id: 'surname',
            name: 'usuario',
            type: 'text',
            placeholder: 'ingrese su Apellido',
          }}
          handleChange={handleChange}
        />

        <Label size={14} text="Email" />

        <Input
          error={!hasEmail}
          attribute={{
            id: 'Email',
            name: 'Email',
            type: 'text',
            placeholder: 'ingrese su Correo',
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
          REGISTRARSE
        </Button>
      </Items>
    </Slide>
  );
};

SignUp.propTypes = {
  inLogin: PropTypes.bool.isRequired,
};

export default SignUp;
