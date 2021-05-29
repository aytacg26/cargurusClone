import React from 'react';
import classes from './FormTab.module.scss';

const FormTab = ({ title, selected, onSelect }) => {
  const tabClass = `${classes.FormTab} ${selected && classes.selected}`;

  return (
    <span className={tabClass} onClick={onSelect}>
      {title}
    </span>
  );
};

export default FormTab;
