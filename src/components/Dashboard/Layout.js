import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const Layout = styled(Grid)`
  display: grid !important;
  grid-template-columns: ${({ withNavBar = false }) => {
    let result = [];

    if (withNavBar) result = [...result, 'minmax(100px, auto)'];

    result = [...result, '1fr', 'auto'];

    return `${result.join(' ')};`;
  }};
  grid-template-rows: auto;
`;

Layout.defaultProps = {
  withNavBar: false,
};

Layout.propTypes = {
  withNavBar: PropTypes.bool,
};

export default Layout;
