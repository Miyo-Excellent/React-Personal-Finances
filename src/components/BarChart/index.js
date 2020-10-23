import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {} from 'lodash';
import { Chart } from 'react-google-charts';

import styled from 'styled-components';

const CustomBarChart = styled(Chart)`
  &,
  & > *,
  & > * > *,
  svg {
    // width: ${({ width = 0 }) => width}px !important;
  }
`;

const BarChart = ({
  headers = [],
  data = [],
  demo = false,
  mobile = false,
  height = 0,
  loader = <div />,
  title = '',
  width = 0,
}) => {
  const demoData = [
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350],
  ];

  const originalDataFormatted = [headers, data];

  return (
    <CustomBarChart
      width={width}
      height={!!height ? height : 'fit-content'}
      chartType="Bar"
      loader={loader}
      data={demo ? demoData : originalDataFormatted}
      options={{
        chart: { title: mobile ? undefined : title },
        title: mobile ? title : undefined,
        height,
        bar: { groupWidth: mobile ? '95%' : undefined },
        legend: { position: mobile ? 'none' : undefined },
      }}
      rootProps={{ 'data-testid': mobile ? '6' : '1' }}
    />
  );
};

BarChart.defaultProps = {
  demo: false,
  mobile: false,
  width: 0,
  height: 0,
  title: '',
  loader: <div>Loading Chart</div>,
};

BarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ).isRequired,
  headers: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  demo: PropTypes.bool,
  mobile: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  loader: PropTypes.element,
};

export default BarChart;
