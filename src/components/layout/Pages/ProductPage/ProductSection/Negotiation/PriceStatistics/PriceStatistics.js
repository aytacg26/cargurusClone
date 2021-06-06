import React, { useState } from 'react';
import { Fragment } from 'react';
import Button from '../../../../../../ui/Button/Button';
import LineChart from '../../../../../../ui/LineChart/LineChart';
import PriceStatisticsCard from '../../../../../../ui/PriceStatisticCard/PriceStatisticCard';
import classes from './PriceStatistics.module.scss';

const PriceStatistics = ({ priceStatistics, currency }) => {
  const [show, setShow] = useState(null);
  const current = priceStatistics[priceStatistics.length - 1].price;
  const original = priceStatistics[0].price;
  const high = Math.max(...priceStatistics.map((stat) => stat.price));
  const low = Math.min(...priceStatistics.map((stat) => stat.price));

  const handleChartShow = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <Fragment>
      <div className={classes.PriceStatistics}>
        <PriceStatisticsCard
          price={original}
          currency={currency}
          label='Original'
        />
        <PriceStatisticsCard
          type='low'
          price={low}
          currency={currency}
          label='Low'
        />
        <PriceStatisticsCard
          type='high'
          price={high}
          label='High'
          currency={currency}
        />
        <PriceStatisticsCard
          price={current}
          label='Current'
          currency={currency}
        />
      </div>
      <Button
        btnType={show ? 'primary' : 'success'}
        style={{ height: '35px', fontSize: '12.5px', margin: '10px 0' }}
        onClick={handleChartShow}
      >
        {show ? 'Hide Price History' : 'Show Price History'}
      </Button>
      <div
        className={`${classes.PriceChart} ${
          show === null ? '' : show ? classes.Show : classes.Hide
        }`}
      >
        <LineChart
          statisticsData={priceStatistics}
          high={high}
          low={low}
          about='prices'
          currency={currency}
        />
      </div>
    </Fragment>
  );
};

export default PriceStatistics;
