import React from 'react';
//import Typography from '@material-ui/core/Typography';

const Title = () => {
  return (
    <div className="title-container">
      <label className="title-label">
        <span
          style={{
            color:"blue",
            fontSize: '30px',
            textAlign: 'center',
            fontWeight: 'bold',
            padding:""
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
