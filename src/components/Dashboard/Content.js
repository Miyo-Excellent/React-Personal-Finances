import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const Content = styled.div`
  grid-column: ${({ order = 2 }) => order};
  grid-row: 1;
`;

Content.defaultProps = {
  order: 2,
};

Content.propTypes = {
  order: PropTypes.number.isRequired,
};

export default Content;
