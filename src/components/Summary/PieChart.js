import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';

/**
 *
 * @param data {Array<{Array<{String|Number}>}>}
 * @param demo {Boolean}
 * @param height {Number}
 * @param loader {JSX.Element}
 * @param title {String}
 * @param width {Number}
 * @returns {JSX.Element}
 * @constructor
 */
const PieChart = ({
  data = [],
  demo = false,
  height = 300,
  loader = <div />,
  title = '',
  width = 300,
}) => {
  const dataWithTitle = [['Summary', title], ...data];

  const demoData = [
    ['Summary', 'Demo'],
    ['Work', 11],
    ['Eat', 8],
    ['Commute', 3],
    ['Watch TV', 5],
    ['Sleep', 7],
  ];

  return (
    <Chart
      width={`${width}px`}
      height={`${height}px`}
      chartType="PieChart"
      loader={loader}
      data={!demo ? dataWithTitle : demoData}
      options={{
        legend: 'none',
        // pieSliceText: 'label',
        // title: '',
        // pieStartAngle: 100,
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  );
};

PieChart.defaultProps = {
  demo: false,
  width: 300,
  height: 300,
  title: '',
  loader: <div>Loading Chart</div>,
};

PieChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ).isRequired,
  demo: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  loader: PropTypes.element,
};

export default PieChart;
