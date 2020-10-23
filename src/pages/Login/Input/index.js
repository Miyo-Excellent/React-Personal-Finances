import React from 'react';
import TextField from '@material-ui/core/TextField';
import Inputs from 'components/Styled/Inputs';

const Index = ({ attribute, handleChange, error = false }) => (
  <Inputs>
    <TextField
      error={error}
      id={attribute.id}
      name={attribute.name}
      placeholder={attribute.placeholder}
      onChange={(e) => handleChange(e.target.name, e.target.value)}
      type={attribute.type}
    />
  </Inputs>
);

export default Index;
