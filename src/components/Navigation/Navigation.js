import React from 'react';
import propTypes from 'prop-types';
import Skeleton from './Skeleton';

const Navigation = ({ routes = [] }) => <Skeleton newHistory routes={routes} />;

Navigation.propTypes = {
  routes: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Navigation;
