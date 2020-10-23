import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export default styled(Grid)`
  background: #f5f5f5;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto;
  justify-items: center;
  align-content: center;
  grid-gap: 10px;
  padding: 10px !important;
  border-radius: 5px;
`;
