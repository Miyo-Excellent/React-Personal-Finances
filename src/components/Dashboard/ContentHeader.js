import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const ContentHeader = styled(Grid)`
  width: 100%;
  padding: 0 10px;
  display: grid !important;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`;

ContentHeader.defaultProps = {};

ContentHeader.propTypes = {
  order: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default ContentHeader;
