import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Inputs} from 'components/Styled/styles';

// eslint-disable-next-line react/prop-types
const Input = ({ attribute, handleChange }) => {
  return (
    <Inputs>
      <TextField
        id={attribute.id}
        name={attribute.name}
        placeholder={attribute.placeholder}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        type={attribute.type}
        className=""
      />
    </Inputs>
  );
};

export default Input;
