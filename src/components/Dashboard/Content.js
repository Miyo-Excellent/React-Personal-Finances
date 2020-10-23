import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const Content = styled(Grid)`
  grid-column: ${({ order = 2 }) => order};
  grid-row: 1;
  padding: 0 10px;
  display: grid !important;
  grid-template-columns: 1fr;
  grid-template-rows: ${({ order = 2 }) => (order === 2 ? 'auto 1fr' : 'ifr')};

  & > * {
    grid-column: 1;
  }

  & > *:first-child {
    grid-row: 1;
  }

  & > *:nth-child(2) {
    grid-row: 2;
  }
`;

Content.defaultProps = {};

Content.propTypes = {
  order: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Content;
