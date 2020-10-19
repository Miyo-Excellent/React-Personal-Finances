import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = ({ attribute, handleChange, param }) => {
  return (
    <div
      style={{
        padding: '10px',
        margin: '10px',
        width: '200px',
      }}
    >
      <TextField
        id={attribute.id}
        name={attribute.name}
        placeholder={attribute.placeholder}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        type={attribute.type}
        className=""
      />
    </div>
  );
};

export default Input;
