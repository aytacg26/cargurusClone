import React, { useState } from 'react';
import Tooltip from '../../../../../../ui/Tooltip/Tooltip';
import classes from './MajorOption.module.scss';

const MajorOption = ({ label, info, isExist, toolTipSide }) => {
  const [show, setShow] = useState(false);
  const icon = `${classes.CheckMark} ${isExist ? classes.Exist : ''}`;
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
    <div className={classes.MajorOption}>
      <span className={icon}></span>
      <label>{label}</label>
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
    </div>
  );
};

export default MajorOption;
