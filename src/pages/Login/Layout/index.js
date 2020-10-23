import styled from 'styled-components';
import { Grid } from '@material-ui/core';

const Layout = styled(Grid)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 7fr minmax(300px, 3fr);
  grid-template-rows: 1fr;

  & > *:first-child {
    grid-column: 1;
    grid-row: 1;
  }

  & > *:nth-child(2) {
    grid-column: 2;
    grid-row: 1;
  }
`;

export default Layout;
