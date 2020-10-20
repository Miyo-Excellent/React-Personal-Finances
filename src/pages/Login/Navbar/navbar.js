import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';
import { ItemsLogin } from 'components/Styled/styles';

const Navbar = ({  setInLogin }) => {
  return (
    <ItemsLogin>
      <ButtonGroup variant="text" color="primary">
        <Button onClick={() => setInLogin(false)}>Ingresar</Button>

        <Button onClick={() => setInLogin(true)}>Registro</Button>
      </ButtonGroup>
    </ItemsLogin>
  );
};

export default Navbar;
