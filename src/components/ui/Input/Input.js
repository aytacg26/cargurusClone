import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  const label = props.label;
  const warningMessage = props.errorMessage;
  const notValid = props.notValid;
  const inputProps = { ...props };
  delete inputProps.label;
  delete inputProps.notValid;
  delete inputProps.errorMessage;

  const inputClass = `${classes.Input} ${notValid ? classes.NotValid : ''}`;
  const warningClass = `${classes.WarningContainer} ${
    notValid ? classes.Show : ''
  }`;

  return (
    <label>
      <input {...inputProps} className={inputClass} autoComplete='off' />
      <span className={`${classes.Label} ${props.value ? classes.filled : ''}`}>
        {label}
      </span>
      {warningMessage && (
        <div className={warningClass}>
          <span className={classes.Triangle}></span>
          <div className={classes.Warning}>{warningMessage}</div>
        </div>
      )}
    </label>
  );
};

export default Input;
