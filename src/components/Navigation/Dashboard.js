import React from 'react';
import { Redirect } from 'react-router';
import { AppBar, Summary, MonthsSlider } from 'components';
// import { make } from 'theme';
import { dashboard as routes } from 'routes';
import { useAuth, useSlider } from 'hooks';
import Skeleton from './Skeleton';

const Dashboard = ({ history = {} }) => {
  // const classes = make((theme) => ({}));

  const { data: token, setData: setToken, hasData: hasToken } = useAuth();

  const sliderData = useSlider();

  if (!hasToken) return <Redirect to="/login" />;

  const appBar = <AppBar routes={routes} />;

  const summary = <Summary />;

  const header = <MonthsSlider {...sliderData} />;

  return (
    <Skeleton
      withOutRouter
      history={history}
      routes={routes}
      appBar={appBar}
      summary={summary}
      header={header}
      childrenExtraProps={{ token, slider: sliderData }}
    />
  );
};

Dashboard.propTypes = {};

export default Dashboard;
