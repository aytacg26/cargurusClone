import React from 'react';
import PropTypes from 'prop-types';
import ReviewCards from './ReviewCards/ReviewCards';
import classes from './VehicleHistory.module.scss';
import { Link } from 'react-router-dom';
import CardWindow from '../../../../../ui/CardWindow/CardWindow';
import { formatDate } from '../../../../../../utils/utilsFuncs';

const VehicleHistory = ({
  owners,
  title,
  accidents,
  rentalUse,
  autoCheckDate,
}) => {
  return (
    <CardWindow
      cards={
        <ReviewCards
          owners={owners}
          title={title}
          accidents={accidents}
          rentalUse={rentalUse}
        />
      }
      header='Vehicle History'
    >
      <div className={classes.VehicleHistory}>
        <a
          href='#!'
          title='AutoCheck Vehicle History Report'
          referrerPolicy='no-referrer'
          target='_blank'
        >
          Save 20% on the full AutoCheck Vehicle History Report
        </a>
        <span>
          Vehicle history data provided by Experian AutoCheck on{' '}
          {formatDate(autoCheckDate)}. This data, and any reliance on it, is
          subject to the{' '}
          <a
            href='#!'
            title='AutoCheck Terms and Conditions'
            referrerPolicy='no-referrer'
            target='_blank'
          >
            AutoCheck Terms and Conditions
          </a>{' '}
          and the{' '}
          <Link to='/terms/terms-of-use' title='Terms of Use'>
            CarWorld Terms of Use
          </Link>
          .
        </span>
      </div>
    </CardWindow>
  );
};

VehicleHistory.defaultProps = {
  owners: 0,
  title: false,
  accidents: 0,
  rentalUse: false,
};

VehicleHistory.propTypes = {
  owners: PropTypes.number,
  title: PropTypes.bool,
  accidents: PropTypes.number,
  rentalUse: PropTypes.bool,
};

export default VehicleHistory;
