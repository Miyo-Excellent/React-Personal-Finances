import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const Summary = styled(Grid)`
  grid-column: ${({ order = 3 }) => order};
  grid-row: 1;
`;

Summary.defaultProps = {
  order: 3,
};

Summary.propTypes = {
  order: PropTypes.number.isRequired,
};

export default Summary;
