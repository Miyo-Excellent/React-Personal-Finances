import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Slide, Button } from '@material-ui/core';
import { Items } from '../../../components/Styled/styles';
import Label from '../Label/label';
import Input from '../Input/input';

const SignUp = ({ inLogin = false }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

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

  return (
    <Slide in={inLogin} direction="left" mountOnEnter unmountOnExit timeout={750}>
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
          attribute={{
            id: 'contraseña',
            name: 'contraseña',
            type: 'password',
            placeholder: 'ingrese su contraseña'
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
