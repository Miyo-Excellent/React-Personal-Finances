import PropTypes from 'prop-types';
import styled from 'styled-components';

const Layout = styled.main`
  width: 100%;
  height: 100%;
  min-height: 97.5vh;
  background: rgba(246, 247, 251, 1);
  display: grid !important;
  grid-gap: 10px;
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
