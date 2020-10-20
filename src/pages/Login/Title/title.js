import React from 'react';
//import Typography from '@material-ui/core/Typography';

const Title = () => {
  return (
    <div
      className="title-container"
      style={{
        padding: '40px 0',
      }}
    >
      <label className="title-label">
        <span
          style={{
            color: 'blue',
            fontSize: '40px',
            textAlign: 'center',
            fontWeight: 'bold',
            padding: '20px 0',
          }}
        >
          Hey ! <br />
          Wellcome Bank
        </span>
      </label>
    </div>
  );
};

export default Title;
