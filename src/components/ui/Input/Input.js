import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  const label = props.label;
  const inputProps = { ...props };
  delete inputProps.label;

  return (
    <label>
      {label}
      <input {...inputProps} className={classes.Input} />
    </label>
  );
};

export default Input;
