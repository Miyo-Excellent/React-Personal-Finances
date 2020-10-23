import styled from 'styled-components';
import { AppBar as MaterialAppBar } from '@material-ui/core';

export default styled(MaterialAppBar)`
  min-width: 200px;
  background: none !important;

  &,
  & > * {
    height: 100% !important;
    width: 100% !important;

    & > * {
      height: 100% !important;
      width: 100% !important;
      flex-direction: column !important;
      flex-wrap: nowrap !important;
      padding: 0 !important;
    }
  }
`;
