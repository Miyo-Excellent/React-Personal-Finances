import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import { Button as MaterialButton } from '@material-ui/core';

const styles = {
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: 'none',
    borderRadius: 3,
    border: 0,
    color: '#1B2437',
    height: 40,
    padding: '0 20px',
    // boxShadow: '0 1px 2px 1px rgba(0, 0, 0, 0.2)',
    margin: 5,
    fontFamily: "'Playfair Display', serif",
  },
};

const Button = (props) => <MaterialButton {...props} />;

Button.defaultProps = {
  children: null,
};

Button.propTypes = {
  children: propTypes.node,
};

export default withStyles(styles)(Button);
