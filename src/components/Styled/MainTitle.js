import styled from 'styled-components';

const MainTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 300px;
  height: auto;
  font-size: ${({ size = 12 }) => `${size}px`};
`;
export default MainTitle;
