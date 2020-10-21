import React from 'react';
import { Titles } from 'components/Styled/styles';

const Label = ({ text, size }) => {
  return (
      <Titles size={size}>{text}</Titles>
  );
};
export default Label;
