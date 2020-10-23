import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const NavBar = styled(Grid)`
  min-width: 200px;
  grid-column: ${({ order = 1 }) => order};
  grid-row: 1;
`;

NavBar.defaultProps = {
  order: 1,
};

NavBar.propTypes = {
  order: PropTypes.number.isRequired,
};

export default NavBar;
