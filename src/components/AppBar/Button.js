import React from 'react';
import propTypes from 'prop-types';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Button as MaterialButton } from '@material-ui/core';
import { green, grey } from '@material-ui/core/colors';

const useStyles = ({ active = false }) =>
  makeStyles((theme) => ({
    root: {
      borderRadius: 3,
      border: 0,
      color: active ? grey[50]: grey[800],
      height: 40,
      padding: '0 20px',
      // boxShadow: '0 1px 2px 1px rgba(0, 0, 0, 0.2)',
      marginBottom: 5,
      // fontFamily: "'Playfair Display', serif",
      backgroundColor: active ? green.A400 : 'none',
      transition: 'all linear 125ms',
      '&:hover': {
        backgroundColor: active ? green.A700 : green.A200,
      },
    },
  }));

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   main: green[200],
    // },
    // secondary: {
    //   main: green[500],
    // },
  },
});

const Button = (props) => {
  const classes = useStyles(props)();

  return (
    <ThemeProvider theme={theme}>
      <MaterialButton classes={{ root: classes.root }} {...props} />
    </ThemeProvider>
  );
};

Button.defaultProps = {
  active: false,
  children: null,
};

Button.propTypes = {
  active: propTypes.bool,
  children: propTypes.node,
};

export default Button;
