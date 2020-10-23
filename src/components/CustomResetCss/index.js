// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const CustomResetCss = styled(Grid)`
  &,
  & * {
    margin: 0;
    padding: 0;
  }
`;

CustomResetCss.propTypes = {};

export default CustomResetCss;
