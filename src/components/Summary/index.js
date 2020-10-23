import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { useGraphicsData, useSummaryActions, useTotals } from 'hooks';
import __actions__ from './Actions';
import __action__ from './Action';
import __container__ from './Container';
import __graphics__ from './Graphics';
import __pieChart__ from './PieChart';
import __pieChartDetail__ from './PieChartDetail';
import __pieChartDetails__ from './PieChartDetails';
import __totals__ from './Totals';
import __total__ from './Total';
import __totalContainer__ from './TotalContainer';
import __totalLabel__ from './TotalLabel';
import __totalResult__ from './TotalResult';

export const Action = __action__;
export const Actions = __actions__;
export const Container = __container__;
export const Graphics = __graphics__;
export const PieChart = __pieChart__;
export const PieChartDetail = __pieChartDetail__;
export const PieChartDetails = __pieChartDetails__;
export const Total = __total__;
export const Totals = __totals__;
export const TotalContainer = __totalContainer__;
export const TotalLabel = __totalLabel__;
export const TotalResult = __totalResult__;

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Summary = ({
  demo = false,
}) => {
  const graphicsTitle = 'Categorias';

  const { data: totals, setData: setTotals, hasData: hasTotals } = useTotals({ demo: true });

  const { data: actions, setData: setActions, hasData: hasActions } = useSummaryActions();

  const {
    data: graphicsData = [],
    setData: setGraphicsData,
    hasData: hasGraphicsData,
  } = useGraphicsData({ demo: true });

  return (
    <Container container>
      <Grid item xs={12} ms={12} lg={12} xl={12} spacing={2}>
        <Actions data={actions} />

        <Totals data={totals} progressSize={40} />

        <Graphics title={graphicsTitle} demo={demo} data={graphicsData} />
      </Grid>
    </Container>
  );
};

Summary.defaultProps = {
  demo: false,
};

Summary.propTypes = {
  demo: PropTypes.bool,
};

export default Summary;
