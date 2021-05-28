import React, { forwardRef } from 'react';
import classes from './DropMenu.module.scss';

const DropMenu = (
  { top, left, right, bottom, children, name, onClick },
  ref
) => {
  return (
    <div
      className={classes.ShowMore}
      style={{ top, left, right, bottom }}
      ref={ref}
      onClick={onClick}
      name={name}
    >
      {children}
    </div>
  );
};

export default forwardRef(DropMenu);
