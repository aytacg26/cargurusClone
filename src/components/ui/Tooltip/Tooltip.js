import React from 'react';
import classes from './Tooltip.module.scss';

const Tooltip = ({
  text,
  show,
  children,
  onMouseEnter,
  onMouseLeave,
  side,
}) => {
  let toolTipClass = `${classes.TooltipText} ${show ? classes.Show : ''}`;

  switch (side) {
    case 'top':
      toolTipClass += ` ${classes.top}`;
      break;

    case 'right':
      toolTipClass += ` ${classes.right}`;
      break;

    case 'bottom':
      toolTipClass += ` ${classes.bottom}`;
      break;

    case 'left':
      toolTipClass += ` ${classes.left}`;
      break;

    default:
      toolTipClass += '';
      break;
  }

  return (
    <div className={classes.Tooltip}>
      {children}
      <span
        className={toolTipClass}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
