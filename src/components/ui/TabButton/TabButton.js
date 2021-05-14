import React from 'react';
import classes from './TabButton.module.css';

const TabButton = ({ onClick, children, selected }) => {
  const btnClass = `${classes.TabButton} ${selected ? classes.selected : ''}`;

  return (
    <div className={classes.TabButtonShell}>
      <button onClick={onClick} className={btnClass}>
        {children}
      </button>
      {selected && <span className={`${classes.Triangle}`}></span>}
    </div>
  );
};

export default TabButton;
