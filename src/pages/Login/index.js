import React, { useState } from 'react';
// import propTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { Redirect } from 'react-router';
import { useAuth } from 'hooks';
import { Container, Nav, Image } from 'components/Styled';
import imagen from 'assets/Images/unnamed.jpg';

import Navbar from './Navbar';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Layout from './Layout';
import Right from './Right';

const Login = () => {
  const [inLogin, setInLogin] = useState(true);

  const { data: token, setData: setToken, hasData: hasToken } = useAuth();

  if (hasToken) return <Redirect to="/dashboard" />;

  return (
    <Layout>
      <Grid>
        <Image src={imagen} alt="" style={{ objectFit: 'cover' }} />
      </Grid>

      <Container>
        <Nav>
          <Navbar setInLogin={setInLogin} />
        </Nav>

        <Right>
          <SignUp inLogin={inLogin} />

          <SignIn inLogin={inLogin} />
        </Right>
      </Container>
    </Layout>
  );
};

Login.propTypes = {};

export default Login;
