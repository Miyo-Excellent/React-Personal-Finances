import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  justify-items: center;
  align-content: center;

  & > *:first-child {
    grid-column: 1;
    grid-row: 1;
  }

  & > *:nth-child(2) {
    grid-column: 1;
    grid-row: 2;
  }
`;
export default Container;
