import React from 'react';
import MajorOption from '../MajorOption/MajorOption';
import classes from './MajorOptions.module.scss';

const getToolTipSide = (idx) => {
  const result = idx % 4;

  switch (result) {
    case 0:
      return 'left';
    case 1:
      return 'right';
    case 2:
    case 3:
      return 'top';

    default:
      return 'top';
  }
};

const MajorOptions = ({ majorOptions }) => {
  if (majorOptions === undefined || majorOptions.length === 0) {
    return null;
  }

  return (
    <div className={classes.MajorOptions}>
      {majorOptions.map((option, index) => (
        <MajorOption
          isExist={option.exist}
          label={option.label}
          info={option.info}
          key={option.id}
          toolTipSide={getToolTipSide(index + 1)}
        />
      ))}
    </div>
  );
};

export default MajorOptions;
