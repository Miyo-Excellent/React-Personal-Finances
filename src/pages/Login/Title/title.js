import React from 'react';
import Typography from '@material-ui/core/Typography';

const Title = ({ text }) => {
  return (
    <div className='title-container'>
      <label className='title-label'>
        <Typography style={{
          background:"purple",
          fontSize:"20px",
          textAlign:"center",
          fontWeight: 'bold'

        }}
        >
          {text}
        </Typography>

      </label>

    </div>
  )
};

export default Title;
