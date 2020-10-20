import styled from 'styled-components';
import { Breadcrumbs } from '@material-ui/core';

export const Titles = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 300px;
  height: auto;
  margin: 10px;
  padding: 0 10px;
  font-size: ${({ size = 12 }) => `${size}px`};
`;

export const ItemsLogin = styled(Breadcrumbs)`
  font-size: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 0;
  padding: 10px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`;

export const Nav = styled.div`
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: row;
`;

export const Items = styled.div`
  grid-column: 1;
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
`;

export const Images = styled.div`
  background: blue;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 300px;
  height: auto;
  margin: 10px;
  padding: 10px 0;
`;
