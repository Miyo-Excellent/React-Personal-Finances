import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { getMonthsByNumber } from 'utils';
import prettoSlider from './PrettoSlider';

export const PrettoSlider = prettoSlider;

const MonthsSlider = ({
  data = 1,
  defaultData = 1,
  max = 12,
  min = 1,
  step = 1,
  setData = (val = 1) => null,
}) => {
  const onChange = (event, value = 1) => setData(value);

  return (
    <Grid container item style={{ padding: 10 }}>
      <Typography id="discrete-slider" variant="h4" gutterBottom>
        {getMonthsByNumber(data)}
      </Typography>

      <PrettoSlider
        marks
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        min={min}
        step={step}
        max={max}
        defaultValue={defaultData}
        value={data}
        getAriaValueText={getMonthsByNumber}
        valueLabelFormat={getMonthsByNumber}
        onChange={onChange}
      />
    </Grid>
  );
};

MonthsSlider.propTypes = {
  data: PropTypes.number.isRequired,
  defaultData: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  setData: PropTypes.func.isRequired,
};

export default MonthsSlider;
