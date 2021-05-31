import React from 'react';
// import { ImArrowRight } from 'react-icons/im';
import classes from './DealBadge.module.scss';
import PropTypes from 'prop-types';

const DealBadge = ({
  Great,
  Good,
  Fair,
  HighPrice,
  OverPrice,
  NoAnalysis,
  Uncertain,
  priceDifference,
  size,
}) => {
  const dealColor =
    (Great && '#006B00') ||
    (Good && '#009B00') ||
    (Fair && '#00BD00') ||
    (HighPrice && '#FF8400') ||
    (OverPrice && '#F60000') ||
    ((NoAnalysis || Uncertain) && '#707070') ||
    '#000';

  const dealText =
    (Great && 'Great Deal') ||
    (Good && 'Good Deal') ||
    (Fair && 'Fair Deal') ||
    (HighPrice && 'High Price') ||
    (OverPrice && 'Over Price') ||
    (NoAnalysis && 'No Price Analysis') ||
    (Uncertain && 'Uncertain') ||
    'Undefined';

  const IconSectionClass = `${classes.IconSection} ${
    Great ? classes.Great : ''
  } ${Good ? classes.Good : ''} ${HighPrice ? classes.High : ''} ${
    OverPrice ? classes.Over : ''
  }`;

  const showArrow = Great || Good || Fair || HighPrice || OverPrice;
  const priceStatus =
    ((HighPrice || OverPrice) && 'ABOVE') ||
    ((Great || Good || Fair) && 'BELOW') ||
    '';

  return (
    <div
      className={classes.BadgeContainer}
      title={`£${priceDifference} UK Pound ${priceStatus} Market Price`}
      style={{ transform: `scale(${size || 1})` }}
    >
      <div className={IconSectionClass} style={{ backgroundColor: dealColor }}>
        {showArrow && <span className={classes.Icon}></span>}
        {NoAnalysis && <span className={classes.IconNoArrow}>/</span>}
        {Uncertain && <span className={classes.IconNoArrow}>?</span>}
      </div>
      <div className={classes.DealTextSection}>
        <h3 style={{ color: dealColor }}>{dealText}</h3>
        {priceDifference && !NoAnalysis && !Uncertain && (
          <span>{`£${priceDifference} ${priceStatus}`}</span>
        )}
      </div>
    </div>
  );
};

DealBadge.propTypes = {
  Great: PropTypes.bool,
  Good: PropTypes.bool,
  Fair: PropTypes.bool,
  HighPrice: PropTypes.bool,
  OverPrice: PropTypes.bool,
  NoAnalysis: PropTypes.bool,
  Uncertain: PropTypes.bool,
};

export default DealBadge;
