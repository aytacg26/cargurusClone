import React, { useState, Fragment } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import classes from './InfoTooltip.module.scss';

const InfoTooltip = ({ info, toolTipSide }) => {
  const [show, setShow] = useState(false);

  let timerLeave;
  let timerEnter;

  const hanldeMouseEnter = () => {
    clearTimeout(timerLeave);
    timerEnter = setTimeout(() => setShow(true), 500);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerEnter);
    timerLeave = setTimeout(() => setShow(false), 1000);
  };

  return (
    <Fragment>
      {info && (
        <Tooltip
          text={info}
          show={show}
          onMouseEnter={hanldeMouseEnter}
          onMouseLeave={handleMouseLeave}
          side={toolTipSide}
        >
          <span
            className={classes.InfoIcon}
            onMouseEnter={hanldeMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></span>
        </Tooltip>
      )}
    </Fragment>
  );
};

export default InfoTooltip;
