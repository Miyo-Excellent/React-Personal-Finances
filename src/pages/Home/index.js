import React, { createRef, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { isNumber, toNumber } from 'lodash';
import numeral from 'numeral';
import { Grid, Paper } from '@material-ui/core';
import { BarChart } from 'components';
import { useGraphicsData } from 'hooks';
import { getMonthsByNumber } from 'utils';
import container from './Container';

const Container = container;

const Home = ({ slider = {} }) => {
  const ID = 'home-container';

  const containerRef = createRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [loading, setLoading] = useState(false);

  const {
    data: graphicsData = [],
    // setData: setGraphicsData,
    // hasData: hasGraphicsData,
  } = useGraphicsData({});

  const month = getMonthsByNumber(slider?.data || 1);

  const curveChartHeaders = [
    'Mes',
    ...graphicsData.map(
      ({ name = '', value = 0 }) => `${name}: ${`${numeral(value).format('0.0a')}`.toUpperCase()}`,
    ),
  ];

  const curveChartData = [
    month,
    ...graphicsData.map(({ value = 0 }) => (value < 0 ? value * -1 : value)),
  ];

  const updateSizes = (ref) => {
    if (!loading && ((!!containerRef && !!containerRef.current) || !!ref)) {
      const { clientHeight = 0, clientWidth = 0 } = ref || containerRef.current;

      setLoading(true);

      if (clientHeight !== width) setWidth(toNumber(clientWidth));
      if (clientWidth !== height) setHeight(toNumber(clientHeight));

      setLoading(false);
    }
  };

  useEffect(() => {
    const resizeEventFunc = () => {
      const { clientHeight = 0, clientWidth = 0 } = document.querySelector(`#${ID}`);

      updateSizes({ clientHeight, clientWidth });
    };

    window.addEventListener('resize', resizeEventFunc);

    return () => {
      window.removeEventListener('resize', resizeEventFunc);
    };
  }, []);

  return (
    <Container container>
      <Grid
        id={ID}
        item
        component={Paper}
        style={{ padding: 10, height: 'fit-content', width: '100%' }}
      >
        {!loading && (
          <div style={{ width: '100%' }} ref={containerRef}>
            <BarChart
              data={curveChartData}
              headers={curveChartHeaders}
              width="100%"
              height={700}
              mobile={!!width && isNumber(width) && width < 500}
            />
          </div>
        )}
      </Grid>
    </Container>
  );
};

Home.defultProps = {};

Home.propTypes = {};

export default Home;
