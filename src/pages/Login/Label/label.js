import React from 'react';
import Typography from '@material-ui/core/Typography';


const Label = ({text}) => {
  return(
    <div>
      <Typography>
        {text}
      </Typography>
    </div>
  )
}
export default Label;
