// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const Container = styled(Grid)`
  width: 100%;
  padding: 10px 0 0 0;
  //  display: grid !important;
  //grid-template-columns: 1fr;
  //grid-template-rows: ${({ order = 2 }) => (order === 2 ? 'auto 1fr' : 'ifr')};
`;

Container.defaultProps = {};

Container.propTypes = {
  // order: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Container;
